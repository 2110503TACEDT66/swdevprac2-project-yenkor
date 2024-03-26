import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/libs/userLogin";

export const authOptions:AuthOptions =  {
    providers: [
        //Authentication Provider, use Credentials Provider
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email", placeholder: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
            
              if (!credentials) return null;
              const user = await userLogin(credentials.email, credentials.password);
              // const user = {id: "1", email: "TESTER@gmail.com", password: "01234567", name:"TESTER"}
              // const user = await userLogin(req.body?.email, req.body?.password);
        
              if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token, user}) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
      signIn: '/auth/login',
      error: '/auth/error'
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};