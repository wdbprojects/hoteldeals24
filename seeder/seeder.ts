import mongoose from "mongoose";
import Room from "../backend/models/room";
import { rooms } from "./data";
require("dotenv").config();

const seedRooms = async () => {
  console.log("DB_LOCAL_URI: ", process.env.DB_LOCAL_URI!);
  try {
    const connection = await mongoose.connect(process.env.DB_LOCAL_URI!);
    if (!connection) console.log("Connection error detected");
    await Room.deleteMany();
    console.log("All rooms are deleted");
    await Room.insertMany(rooms);
    console.log("Rooms uploaded successfully");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

seedRooms();
