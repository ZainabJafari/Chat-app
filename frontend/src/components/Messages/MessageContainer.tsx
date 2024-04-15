import React, { useEffect } from "react";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer: React.FC = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null as any);
	}, [setSelectedConversation]);

	return (
		<div className="md:min-w-[450px] flex flex-col bg-[#fdb44b] rounded-md">
			{!selectedConversation ? (
				<NochatSelected />
			) : (
				<>
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To:</span>{" "}
						<span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};

const NochatSelected: React.FC = () => {
	const {authUser} = useAuthContext()
	return (
		<div className="flex flex-col felx-1">
			<h2>welcome {authUser?.fullName}</h2>
			<p className="font-bold">Select a conversation to start chatting!</p>
			<TiMessages />
		</div>
	);
};

export default MessageContainer;
