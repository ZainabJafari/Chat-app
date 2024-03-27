// AuthContextProvider
"use client"
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("chat-user");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []); 

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
