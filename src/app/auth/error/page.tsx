import LoginPage from "../login/page";

export default function ErrorPage() {
    return (
        <main>
            <div className="font-white">
                Invalid Credentials
            </div>
            <LoginPage errorMessage="Invalid Credentials"/>
        </main>
        
    );
    
}