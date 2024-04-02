import { useState } from 'react';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    const sendMessage = async (message: string) => {
        setLoading(true);
        try {
            if (!selectedConversation) {
                throw new Error('No conversation selected.');
            }

            const response = await fetch(`http://localhost:2000/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message })
            });
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading };
};

export default useSendMessage;
