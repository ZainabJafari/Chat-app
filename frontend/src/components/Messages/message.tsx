import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }: any) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "justify-end" : "justify-start";
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-[#7dd87d]" : "bg-gray-200";
  const textColor = fromMe ? "text-white" : "text-black";

  const shakeClass = message.shouldShake ? "shake" : "";
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={messageEndRef} className={`flex items-end ${chatClassName} mb-4`}>
      {!fromMe && (
        <div className="chat-image avatar mr-3">
          <div className="w-10 h-10 rounded-full">
            <img src={profilePic} alt="" />
          </div>
        </div>
      )}
      <div
        className={`chat-bubble max-w-[75%] inline-block p-3 mb-2.5 rounded-2xl rounded-br-none py-3 px-5 ${bubbleBgColor} ${textColor} ${shakeClass}`}
      >
        <p>{message.message}</p>
        <div className="chat-footer text-xs opacity-70 text-right mt-1">
          {formattedTime}
        </div>
      </div>
      {fromMe && (
        <div className="chat-image avatar ml-3">
          <div className="w-10 h-10 rounded-full">
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
