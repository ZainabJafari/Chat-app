"use client";
import React, { useEffect } from "react";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
  
	useEffect(() => {
    // cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
  
//   console.log(selectedConversation)
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NochatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;


const NochatSelected = () => {
  return (
    <div className="flex flex-col felx-1">
      <p className="font-bold">Select a conversation to start chatting!</p>
      <TiMessages />
    </div>
  );
};

