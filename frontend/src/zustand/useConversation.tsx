import { create } from "zustand";
import Conversation from "../type/conversation";
import Message from "../type/message";

interface ConversationState {
  selectedConversation: Conversation | null;
  setSelectedConversation: (selectedConversation: Conversation) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}
const useConversation = create<ConversationState>((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));


export default useConversation;
