interface Conversation {
    _id?: string;
    participants: string[]; 
    messages: string[]; 
    createdAt?: string; 
    updatedAt?: string; 
    profilePic: string; 
    fullName: string; 
  }
  
  export default Conversation;
  