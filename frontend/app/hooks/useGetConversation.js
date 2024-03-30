import { useEffect, useState } from "react";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:2000/api/user");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
        console.log("det är uders", data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversation };
};

export default useGetConversation;
