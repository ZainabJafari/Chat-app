import useConversationHook from "../zustand/useConversation";
import ConversationType from "../type/conversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { selectedConversation, setSelectedConversation } = useConversationHook();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id!);

  return (
    <div
      className={`flex gap-2 items-center p-2 py-1 cursor-pointer rounded-lg transition
        ${isSelected ? "bg-sky-500" : "hover:bg-sky-500 hover:bg-opacity-25"}
        ${isOnline ? "ring-2 ring-sky-500" : "ring-1 ring-gray-300"}`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className="w-12 rounded-full">
        <img src={conversation.profilePic} alt="user avatar" className="w-full h-full object-cover" />
      </div>
      <div className={`flex flex-col justify-center overflow-hidden`}>
        <p className={`text-white text-sm font-medium truncate`}>{conversation.fullName}</p>
        {isOnline && (
          <span className="text-xs font-semibold text-green-400">Online</span>
        )}
      </div>
    </div>
  );
};

export default Conversation;
