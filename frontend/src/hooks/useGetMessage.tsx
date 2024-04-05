import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			// Kontrollera om selectedConversation är null innan vi fortsätter
			if (!selectedConversation) return; // Om null, avsluta funktionen tidigt

			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
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
