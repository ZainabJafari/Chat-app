import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuthContext } from "./AuthContext"; // Antag att du har denna definierad någonstans
import io from "socket.io-client";

// Om du prioriterar typsäkerhet, kan du definiera en egen typ eller interface här
// baserat på de metoder och egenskaper från socket-objektet som du använder.
// För enkelhetens skull använder vi `any` här, men överväg att definiera en mer specifik typ.
type SocketType = any; // Ersätt `any` med en mer specifik typ om möjligt

type SocketContextType = {
    socket: SocketType | null;
    onlineUsers: string[];
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocketContext = () => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error("useSocketContext must be used within a SocketContextProvider");
    }
    return context;
};

interface SocketContextProviderProps {
    children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<SocketType | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const { authUser } = useAuthContext(); // Antag att detta returnerar en användare med en `_id`

    useEffect(() => {
        if (authUser?._id) {
            const newSocket = io("http://localhost:2000", {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(newSocket);

            newSocket.on("getOnlineUsers", (users: string[]) => {
                setOnlineUsers(users);
            });

            return () => {
                newSocket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
