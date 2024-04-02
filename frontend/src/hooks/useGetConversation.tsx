import { useEffect, useState } from "react";
import Conversation from "../type/conversation";

interface ConversationResponse {
  error?: string;
  conversations: Conversation[];
}

const useGetConversation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Conversation[]>([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:2000/api/user");
        const data: ConversationResponse = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data.conversations);
        console.log("det är uders", data.conversations);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversation };
};

export default useGetConversation;

