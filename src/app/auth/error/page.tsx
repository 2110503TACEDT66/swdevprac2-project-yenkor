import LoginPage from "../login/page";

export default function ErrorPage() {
    return (
        <main>
            <LoginPage errorMessage="Invalid Credentials"/>
        </main>
        
    );
    
}