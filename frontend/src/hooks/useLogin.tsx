import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// interface LoginResponse {
//     user: User;
//     error?: string; // Lägg till ett error-fält ifall servern svarar med ett fel
// }

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // Lägg till ett state för att hantera felmeddelanden
    const { setAuthUser } = useAuthContext();

    const login = async (userName: string, password: string) => {
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

            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.error); 
                return; 
            }

            const data = await res.json();
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            console.error('Error with login', error);
            setError("Failed to connect to server");
        } finally {
            setLoading(false);
        }
    };

    return { loading, login, error };
};

export default useLogin;
function handleInputErrors(userName: string, password: string): boolean {
    if (!userName || !password) {
        alert("Please fill in all fields");
        return false;
    }

    return true;
}
