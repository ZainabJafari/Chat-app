
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversation";

const Conversations = () => {
  const { loading, conversation } = useGetConversations();

  // console.log("conversations loaded 999", conversation);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {Array.isArray(conversation) &&
        conversation.map((conversationItem) => (
          <Conversation key={conversationItem._id} conversation={conversationItem}  />
        ))}
      {loading ? <span>Loading...</span> : null}
    </div>
  );
};

export default Conversations;
