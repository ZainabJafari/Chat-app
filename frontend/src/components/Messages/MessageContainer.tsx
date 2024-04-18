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
<div className="md:min-w-[450px] flex flex-col bg-white rounded-md shadow-lg">
  {!selectedConversation ? (
    <NochatSelected />
  ) : (
    <>
      <div className="flex items-center bg-slate-500 px-4 py-2 mb-2 rounded-t-md border-b border-gray-200">
        <img alt="Profile image" src={selectedConversation.profilePic} className="w-10 h-10 rounded-full object-cover mr-3"/>
        <span className="text-white font-bold">{selectedConversation.fullName}</span>
      </div>
      <div className="flex-grow overflow-y-auto">
        <Messages />
      </div>
      <div className="border-t border-gray-200">
        <MessageInput />
      </div>
    </>
  )}
</div>
	);
};

const NochatSelected: React.FC = () => {
	const {authUser} = useAuthContext()
	return (
			<div className="sticky flex items-center justify-between border-b border-stroke px-6 py-4.5 dark:border-strokedark">
              <div className="flex items-center">
                <div className="mr-4.5 w-10 rounded-full">
                  <img
                    src={authUser?.profilePic}
                    alt="avatar"
                    className="object-cover object-center"
             
                  />
                </div>
                <div>
                  <h5 className="font-medium text-black dark:text-white">
				  {authUser?.fullName}
                  </h5>
                  <p className="text-sm">Reply to message</p>
                </div>
              </div>
		</div>
	);
};

export default MessageContainer;




