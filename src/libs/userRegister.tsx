export default async function userRegister(name:string, telephone:string, email:string, password:string) {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  
        },
        body: JSON.stringify({
            name: name,
            telephone: telephone,
            email: email,
            password: password
        })
    });

    if (!response.ok) {
        throw new Error("Failed to register");
    }

    return await response.json();
}