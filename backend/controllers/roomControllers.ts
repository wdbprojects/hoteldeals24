import { NextRequest, NextResponse } from "next/server";
import Room from "@/backend/models/room";

/* GET ALL ROOMS */
export const allRooms = async (req: NextRequest) => {
  const resPerPage: number = 8;
  const rooms = await Room.find();
  return NextResponse.json({
    success: true,
    resPerPage: resPerPage,
    rooms: rooms,
  });
};

/* CREATE ONE ROOM */
export const newRoom = async (req: NextRequest) => {
  const body = await req.json();
  const room = await Room.create(body);
  return NextResponse.json({ success: true, room: room });
};

/* GET SINGLE ROOM BY ID */
export const getSingleRoom = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const room = await Room.findById(params.id);
  if (!room) {
    return NextResponse.json(
      { success: false, message: "Room not found!" },
      { status: 404 },
    );
  }
  return NextResponse.json({
    success: true,
    room: room,
  });
};

/* UPDATE ROOM BY ID :: ADMIN */
export const updateRoom = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const body = await req.json();
  const room = await Room.findByIdAndUpdate(params.id, body, { new: true });
  if (!room) {
    return NextResponse.json(
      { success: false, message: "Room not found!" },
      { status: 404 },
    );
  }
  return NextResponse.json({
    success: true,
    room: room,
  });
};

/* DELETE ROOM BY ID :: ADMIN */
export const deleteRoom = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const room = await Room.findById(params.id);
  if (!room) {
    return NextResponse.json(
      { success: false, message: "Room not found!" },
      { status: 404 },
    );
  }

  // TODO - Delete images associated with the room

  await room.deleteOne(room);

  return NextResponse.json({
    success: true,
    room: room,
  });
};
