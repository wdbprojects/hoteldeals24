import mongoose, { Document, Schema } from "mongoose";

export interface ILocation {
  type: string;
  coordinates: number[];
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IImage extends Document {
  public_id: string;
  url: string;
}

export interface IReview extends Document {
  user: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface IRoom extends Document {
  _id: string;
  name: string;
  description: string;
  pricePerNight: number;
  address: string;
  location: ILocation;
  guestCapacity: number;
  numOfBeds: number;
  internet: boolean;
  breakfast: boolean;
  airCondition: boolean;
  petsAllowed: boolean;
  roomCleaning: boolean;
  ratings: number;
  numOfReviews: number;
  images: IImage[];
  category: string;
  reviews: IReview[];
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter the room name"],
    trim: true,
    maxLength: [200, "Room name cannot exceed 200 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter the room description"],
    trim: true,
    maxLength: [1000, "Room description cannot exceed 1000 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter the room price per night"],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, "Please enter the room address"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter the room guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter the number of beds in the room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airCondition: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select the correct category for the room",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Room = mongoose.models.Room || mongoose.model<IRoom>("Room", roomSchema);
export default Room;
