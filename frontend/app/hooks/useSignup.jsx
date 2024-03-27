"use client";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:2000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data.user);
      const localStorageSuccess = localStorage.setItem(
        "chat-user",
        JSON.stringify(data.user)
      );
      console.log("localStorageSuccess:", localStorageSuccess);

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [loading, signup]; // Returnera värdena som en array
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    console.log("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    console.log("Password must be at least 6 characters");
    return false;
  }

  return true;
}
