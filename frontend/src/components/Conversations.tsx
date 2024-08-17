
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversation";

const Conversations = () => {
  
  const { loading, conversation } = useGetConversations();

  return (
    <div className="py-4 flex flex-col overflow-auto">
      {Array.isArray(conversation) &&
        conversation.map((conversationItem) => (
          <Conversation key={conversationItem._id} conversation={conversationItem}  />
        ))}
      {loading ? <span>Loading...</span> : null}
    </div>
  );
};

export default Conversations;
