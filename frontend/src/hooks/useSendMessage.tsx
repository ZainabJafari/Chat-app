import { useState } from 'react';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation();

    const sendMessage = async (message: any) => {
        setLoading(true);
        try {
            if (!selectedConversation) {
                throw new Error('No conversation selected.');
            }

            const response = await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: 'include', 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: message.message })
            });
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
            console.log( 'det är data', data, 'det är messages', messages);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading };
};

export default useSendMessage;
