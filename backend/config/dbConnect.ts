import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;
  let DB_URI: string = "";
  if (process.env.NODE_ENV === "development")
    DB_URI = process.env.DB_LOCAL_URI!;
  if (process.env.NODE_ENV === "production") DB_URI = process.env.DB_URI!;
  try {
    const { connection } = await mongoose.connect(DB_URI);
    if (connection)
      console.log(`Successfully connected to database ${connection.name}...`);
  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
  }
};

export default dbConnect;
