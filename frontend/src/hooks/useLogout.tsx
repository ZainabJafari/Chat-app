import  { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true)
        try {
            const response = await fetch('http://localhost:5000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if (data.error) {
                throw new Error(data.error)
            }
           localStorage.removeItem("chat-user");
            setAuthUser(null)
            
        } catch (error) {
        }finally {
            setLoading(false)
    }}

  return {loading, logout}
};

export default useLogout
