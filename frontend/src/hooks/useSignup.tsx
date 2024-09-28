import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../type/user";

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (userData: User) => {
    const success = handleInputErrors(userData);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: userData.fullName,
          userName: userData.userName,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          gender: userData.gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data); 
    } catch (error) {
      if (error) {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors(userData: User): boolean {
  if (
    !userData.fullName ||
    !userData.userName ||
    !userData.password ||
    !userData.confirmPassword ||
    !userData.gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (userData.password !== userData.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (userData.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
