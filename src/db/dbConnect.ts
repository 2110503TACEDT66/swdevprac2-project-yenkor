import mongoose from "mongoose";

let connected = false;
export const dbConnect = async() => {
    mongoose.set("strictQuery", true)
    if(connected) return

    const MONGO_URI = process.env.MONGO_URI
    if(!MONGO_URI) throw new Error("MONGO_URI is not defined")

    try {
        mongoose.connect(MONGO_URI, {bufferCommands: false})
        connected = true
    }
    catch (error) {
        console.log(error)
    }
}