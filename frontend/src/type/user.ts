interface User {
    _id?: string; 
    fullName: string;
    userName: string;
    password: string; 
    confirmPassword: string; 
    gender: "male" | "female" | "" | undefined;    profilePic?: string; 
    createdAt?: string;
    updatedAt?: string; 
}
  
export default User;
  