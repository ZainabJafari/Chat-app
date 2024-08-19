import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation) return; 

      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`, {
          method: 'GET', 
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json',
          },
          });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
        console.log('data från message', data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
