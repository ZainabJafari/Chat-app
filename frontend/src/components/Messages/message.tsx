// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = ({ message } : any) => {
	// const { authUser } = useAuthContext();
	// const { selectedConversation } = useConversation();
	// const fromMe = message.senderId === authUser._id;
	// const formattedTime = extractTime(message.createdAt);
	// const chatClassName = fromMe ? "chat-end" : "chat-start";
	// const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	// const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";

	return (
		// <div className={`chat ${chatClassName}`}>
		// 	<div className='chat-image avatar'>
		// 		<div className='w-10 rounded-full'>
		// 			<img alt='Tailwind CSS chat bubble component' src={profilePic} />
		// 		</div>
		// 	</div>
		// 	<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
		// 	<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		// </div>
		<div>
			<div className='flex items-center'>
                <div className='flex-shrink-0'>
                    <img alt='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' src={message.profilePic} />
                </div>
                <div className='ml-3'>
                    <div className='text-sm font-medium text-gray-900'>{message.senderName}</div>
                    <div className='text-sm text-gray-500'>{message.message}</div>
                </div>
            </div>
            <div className='text-sm text-gray-500 mt-2'>{message.createdAt}</div>
		</div>
	);
};
export default Message;