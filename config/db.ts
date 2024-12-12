import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("CONNECTED TO MONGODB SUCCESS..");
  } catch (error) {
    console.log("CONNETED TO MONGODB FAILED..");
    ProcessingInstruction.exit(1);
  }
};

export default dbConnect;
