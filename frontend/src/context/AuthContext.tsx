import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../type/user";

interface AuthContextValue {
  authUser:  User | null; 
  setAuthUser: React.Dispatch<React.SetStateAction<any>>; 
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user") || "null") as User | null,);


  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
