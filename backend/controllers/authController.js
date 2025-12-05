import user from "../schema/users.js";

export const getUserDetails = async (req, res) => {
    try{
        const users = await user.find({})
        res.status(200).json({
            message:"User Fetched Successfully",
            User
        })
    }
    catch(error){
        res.status(500).json({
            message:"Errror in Fetching User Details",
            error:error.message
        });
    }
}