import User from "../models/user.model.js";

export const getUsersForSidebar =  async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // Not the logged in user
        const fillteredUser = await User.find({_id: {$in: loggedInUserId}}).select("-password")
        res.status(200).json(fillteredUser);
  
    } catch (error) {
        console.error("Error in getUsersForSidebar", error);
       res.status(500).json({error: "Internal Server Error"});
    }

}