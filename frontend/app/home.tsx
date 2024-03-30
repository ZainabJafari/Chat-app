import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../app/context/AuthContext";
import Sidebar from "./components/Sidebar";
import MessageContainer from "./components/Messages/MessageContainer";

export default function Home() {
  const router = useRouter();
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (!authUser && router.pathname !== "/auth/login") {
      router.push("/auth/login");
    }
  }, [authUser, router.pathname]);
  

  // Om användaren är inloggad, rendera startsidan
  if (authUser) {
    return (
      <div className="p-4 h-screen flex items-center justify-center">
            <Sidebar />
      <MessageContainer />
      </div>
    );
  }

  return null;
}

