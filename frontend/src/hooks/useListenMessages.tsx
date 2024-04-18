import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import Message from "../type/message";


const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const handleNewMessage = (newMessage: Message) => {
            if (selectedConversation && newMessage._id === selectedConversation._id) {
                // const sound = new Audio(notificationSound);
                // sound.play();
                const updatedMessages = [...messages, newMessage];
                setMessages(updatedMessages);
            }
        };

        socket?.on("newMessage", handleNewMessage);

        return () => {
            socket?.off("newMessage", handleNewMessage);
        };
    }, [socket, messages, setMessages, selectedConversation]); 

};

export default useListenMessages;
