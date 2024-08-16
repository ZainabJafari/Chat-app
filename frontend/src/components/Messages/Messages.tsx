import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessage";
import MessageSkeletons from "../skeletons/MessageSkeletons";
import Message from "./message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
  console.log('messages', messages)
	useListenMessages();
	const lastMessageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
		{!loading &&
			messages.length > 0 &&
			messages.map((message) => (
				<div key={message._id} ref={lastMessageRef}>
					<Message message={message} />
				</div>
			))}

		{loading && [...Array(3)].map((_, idx) => <MessageSkeletons key={idx} />)}
		{!loading && messages.length === 0 && (
			<p className='text-center text-xl pt-10 text-white'>Send a message to start the conversation</p>
		)}
	</div>
	);
};
export default Messages;
