import mongoose from "mongoose";

let isConnected = false; // variable to check the connection in Mongoose

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("Connecting to Mongoose not found");
    if(isConnected) return console.log('Connecting to Mongoose already connected');

    try {
      await mongoose.connect(process.env.MONGODB_URL);

      isConnected = true;

      console.log('Connected to Mongoose');

    } catch(error) {
        console.log(error);

    }
}