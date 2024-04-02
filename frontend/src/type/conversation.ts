interface Conversation {
    _id?: string;
    participants: string[]; 
    messages: string[]; 
    createdAt?: string; 
    updatedAt?: string; 
    profilePic: string; // Lägg till profilePic-egenskapen
    fullName: string; // Lägg till fullName-egenskapen
  }
  
  export default Conversation;
  