import { NextRequest, NextResponse } from "next/server";
import Room, { IRoom } from "@/backend/models/room";
import ErrorHandler from "@/backend/utils/errorHandler";
import { catchAsyncErrors } from "../middlewares/catch-async-errors";
import APIFilters from "@/backend/utils/apiFilters";

/* GET ALL ROOMS */
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
  const resPerPage: number = 16;
  //const rooms = await Room.find();
  const { searchParams } = new URL(req.url);

  // throw new ErrorHandler("Hello, this is a custom error!!!", 401);

  const queryStr: any = {};

  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  });

  const roomsCount: number = await Room.countDocuments();

  const apiFilters = new APIFilters(Room, queryStr).search().filter();
  let rooms: IRoom[] = await apiFilters.query;

  apiFilters.pagination(resPerPage);

  rooms = await apiFilters.query.clone();
  const filteredRoomsCount: number = rooms.length;

  return NextResponse.json({
    success: true,
    resPerPage: resPerPage,
    roomsCount: roomsCount,
    filteredRoomsCount: filteredRoomsCount,
    rooms: rooms,
  });
});

/* CREATE ONE ROOM */
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({ success: true, room: room });
});

/* GET SINGLE ROOM BY ID */
export const getSingleRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);
    if (!room) {
      throw new ErrorHandler("Room not found.", 404);
    }
    return NextResponse.json({
      success: true,
      room: room,
    });
  },
);

/* UPDATE ROOM BY ID :: ADMIN */
export const updateRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const body = await req.json();
    const room = await Room.findByIdAndUpdate(params.id, body, { new: true });
    if (!room) {
      throw new ErrorHandler("Room not found.", 404);
    }
    return NextResponse.json({
      success: true,
      room: room,
    });
  },
);

/* DELETE ROOM BY ID :: ADMIN */
export const deleteRoom = catchAsyncErrors(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    const room = await Room.findById(params.id);
    if (!room) {
      throw new ErrorHandler("Room not found.", 404);
    }
    // TODO - Delete images associated with the room
    await room.deleteOne(room);
    return NextResponse.json({
      success: true,
      room: room,
    });
  },
);
