import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Coneected!")
    }
    catch(error){
        console.error("MongoDB Connection Error", error.message);
        process.exit(1);
    }
}