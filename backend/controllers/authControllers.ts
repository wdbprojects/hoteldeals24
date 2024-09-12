import { NextRequest, NextResponse } from "next/server";
import { catchAsyncErrors } from "@/backend/middlewares/catch-async-errors";
import User from "@/backend/models/user";

// REGISTER USER => /api/auth/register
export const registerUser = catchAsyncErrors(async (req: NextRequest) => {
  const body = await req.json();
  const { name, email, password } = body;
  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });
  return NextResponse.json({ success: true, user: user });
});
