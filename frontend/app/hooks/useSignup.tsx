"use client"
import React, { useState } from "react";

interface SignUpData {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignup = (): [boolean, (data: SignUpData) => Promise<void>] => {
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }: SignUpData): Promise<void> => {
    const success = handleInputErrors(
      fullName,
      userName,
      password,
      confirmPassword,
      gender
    );

    if (!success) return;

    try {
      setLoading(true);

      const res = await fetch("http://localhost:2000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error){
        throw new Error(data.error)
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [loading, signup];
};

export default useSignup;

function handleInputErrors(
  fullName: string,
  userName: string,
  password: string,
  confirmPassword: string,
  gender: string
): boolean {
  if (!fullName) {
    alert("Please enter your full name");
    return false;
  }
  if (!userName) {
    alert("Please enter your username");
    return false;
  }
  if (!password) {
    alert("Please enter your password");
    return false;
  }
  if (!confirmPassword) {
    alert("Please confirm your password");
    return false;
  }
  if (!gender) {
    alert("Please select your gender");
    return false;
  }
  return true;
}
