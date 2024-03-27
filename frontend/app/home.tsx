import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../app/context/AuthContext";
import Index from "../index/page";

export default function Home() {
  const router = useRouter();
  const { authUser } = useAuthContext();

  useEffect(() => {
    // Om användaren inte är inloggad och inte på /login-sidan, skicka dem till inloggningssidan
    if (!authUser && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [authUser, router.pathname]);

  // Om användaren är inloggad, rendera startsidan
  if (authUser) {
    return (
      <main className="p-4 h-screen flex items-center justify-center">
        <Index />
      </main>
    );
  }

  // Om användaren inte är inloggad, returnera null (eller visa en laddningsskärm eller annat meddelande)
  return null;
}

