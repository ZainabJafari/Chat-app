import React from 'react';
import '../styles/globals.css'; // Assuming your global styles are in a file named globals.css
import { AuthContextProvider } from '../context/AuthContext'; // Assuming your AuthContext is in a folder named context

function MyApp({ Component, pageProps }) {
  const { authUser } = useAuthContext();

  return (
    <AuthContextProvider>
      <div className='p-4 h-screen flex items-center justify-center'>
        {authUser ? (
          <Component {...pageProps} />
        ) : (
          <div>
            <Link href="/auth/login">
              <a>Login</a>
            </Link>
            <Link href="/auth/signup">
              <a>Sign Up</a>
            </Link>
          </div>
        )}
        <Toaster />
      </div>
    </AuthContextProvider>
  );
}

export default MyApp;

