import { NextRequest, NextResponse } from "next/server";
import { catchAsyncErrors } from "@/backend/middlewares/catch-async-errors";
import User from "@/backend/models/user";

// REGISTER USER => /api/auth/register
export const registerUser = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const { firstName, lastName, email, password } = body;
  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  return NextResponse.json({ success: true, user: user });
});

// UPDATE PROFILE => /api/me/update
export const updateProfile = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const userData = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  };
  const updatedUser = await User.findByIdAndUpdate(req.user._id, userData);
  return NextResponse.json({ success: true, user: updatedUser });
});
