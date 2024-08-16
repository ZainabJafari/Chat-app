import React, { useEffect } from "react";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer: React.FC = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null as any);
	}, [setSelectedConversation]);

	return (
		<div className="w-full flex flex-col bg-[#393e46] border-[#222831] rounded-r-md border-l-2">
			{!selectedConversation ? (
				<NochatSelected />
			) : (
				<>
					<div className="flex p-3 border-b-2 border-[#85a6b1]">
						<img className="h-12 w-12" src={selectedConversation.profilePic}></img>
						<span className="text-white font-bold pt-3 pl-2">{selectedConversation.fullName}</span>
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
			<h2 className="text-xl pt-2 text-white">Welcome {authUser?.fullName}</h2>
			<p className="text-white">Select a conversation to start chatting!</p>
			<div className="flex justify-center pt-2 text-3xl text-white">
{/* 			<TiMessages />
 */}			</div>
		</div>
	);
};

export default MessageContainer;




