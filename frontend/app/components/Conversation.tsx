import React from "react";
import useConversation from "../zustand/useConversation";

const Conversation = ({conversation}: any) => {

  const {selectedConversation, setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id === conversation._id
  
  return (
    <>
      <div	className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col felx-1">
          <p className="font-bold"></p>
          <h1>{conversation.fullName}</h1>
         
        </div>
      </div>
    </>
  );
};

export default Conversation;
