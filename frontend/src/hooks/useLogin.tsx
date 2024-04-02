import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import User from "../type/user"; // Anpassa importvägen

// Notera: Du kanske behöver anpassa denna del beroende på din autentiseringslogik
interface LoginResponse {
  user: User; // Antag att detta är den data du får tillbaka vid en lyckad inloggning
  token: string; // Ett exempel på hur du kan hantera autentiseringstokens
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName: string, password: string) => {
    const success = handleInputErrors(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:2000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data: LoginResponse = await res.json();
      if (data.user && data.token) {
        localStorage.setItem("chat-user", JSON.stringify(data.user));
        localStorage.setItem("chat-token", data.token);
        setAuthUser(data.user); // Använd denna metod för att uppdatera användarstaten i din app
      } else if (data.user) {
        throw new Error();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
