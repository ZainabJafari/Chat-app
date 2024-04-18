import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }: any) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
    const chatAlignment = fromMe ? "justify-end" : "justify-start";
    const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-300";
    const textColor = fromMe ? "text-white" : "text-gray-700";
    const roundedDirection = fromMe ? "rounded-br-none" : "rounded-bl-none";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`flex ${chatAlignment} p-4`}>
      <div className="flex items-end space-x-2">
        {!fromMe && (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img alt="Profile image" src={profilePic} className="w-full h-full object-cover"/>
          </div>
        )}
        <div className="flex flex-col max-w-xs lg:max-w-md">
          <div className={`flex ${roundedDirection} ${bubbleBgColor} ${textColor} p-3 ${shakeClass} rounded-lg `}>
            {message.message}
          </div>
          <div className="text-gray-400 text-xs mt-1">
            {formattedTime}
          </div>
        </div>
        {fromMe && (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img alt="Profile image" src={profilePic} className="w-full h-full object-cover"/>
          </div>
        )}
      </div>
    </div>
  );
};
export default Message;
