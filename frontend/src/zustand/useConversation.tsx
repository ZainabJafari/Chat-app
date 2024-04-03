import { create, SetState } from "zustand";
import Conversation from "../type/conversation";
import Message from "../type/message";

interface ConversationState {
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation | null) => void; // Uppdaterad för att acceptera null
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set: SetState<ConversationState>) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: Conversation | null) => set({ selectedConversation }), // Uppdaterad för att acceptera null
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
}));

export default useConversation;