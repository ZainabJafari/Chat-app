import useConversationHook from "../zustand/useConversation";
import ConversationType from "../type/conversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversationHook();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id!);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-[#222831] rounded p-4 py-2 cursor-pointer
        ${isSelected ? "bg-[#222831]" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="">
          <p className="text-white text-l">{conversation.fullName}</p>
        </div>
      </div>
      <div className={`flex flex-col justify-center overflow-hidden`}>
        <p className={`text-white text-sm font-medium truncate`}>
          {conversation.fullName}
        </p>
        {isOnline && (
          <span className="text-xs font-semibold text-green-400">Online</span>
        )}
      </div>
    </>
  );
};

export default Conversation;
