import useConversationHook from "../zustand/useConversation";
import ConversationType from "../type/conversation";
import {useSocketContext} from "../context/SocketContext";
const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { selectedConversation, setSelectedConversation } = useConversationHook();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id!)

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
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
    </>
  );
};

export default Conversation;
