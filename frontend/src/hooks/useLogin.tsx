import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../type/user"; // Anta att detta är sökvägen till ditt User-interface
// import { error } from "console";

// interface LoginResponse {
//     user: User;
//     error?: string; // Lägg till ett error-fält ifall servern svarar med ett fel
// }

const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setAuthUser } = useAuthContext();

    // Notera: vi returnerar inte längre User direkt från login-funktionen
    const login = async (userName: string, password: string): Promise<void> => {
        const success = handleInputErrors(userName, password);
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("http://localhost:2000/api/auth/login", {
                method: "POST",
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });

            const data: User = await res.json();
            if (!data) {
                console.log('error: no user');
            }

            localStorage.setItem("chat-user", JSON.stringify(data)); // Antag att du vill spara användaren i local storage
            setAuthUser(data); // Uppdatera auth-context med användardata
        } catch (error) {
            if (error) {
                console.log('Error with login');
            }
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};
export default useLogin;

function handleInputErrors(userName: string, password: string): boolean {
    if (!userName || !password) {
        console.log("Please fill in all fields");
        return false;
    }

    return true;
}
