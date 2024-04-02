// Använd "use client" som tidigare specificerat om det behövs för ditt projekt.
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import User from "../type/user"; // Anta att detta är sökvägen till ditt User-interface

// Skapa en ny typ eller interface för att hantera signup-specifika fält
interface SignupData extends Omit<User, 'createdAt' | 'updatedAt' | '_id'> {
  confirmPassword: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false); // Använd TypeScript för att definiera boolean typ
  const { setAuthUser } = useAuthContext();

  const signup = async (userData: SignupData) => {
    const { confirmPassword, ...rest } = userData;
    const success = handleInputErrors(userData);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rest), // Använd rest för att undvika att skicka confirmPassword till servern
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data); // Antag att data här passar den struktur som förväntas av setAuthUser
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

// Notera att jag har uppdaterat parametrarna till att acceptera SignupData typen
function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}: SignupData): boolean {
  // Dina kontroller här, nu med typer
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
