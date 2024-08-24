import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

interface IValidationError {
  message: string[];
}

export const catchAsyncErrors = (handler: HandlerFunction) => {
  return async function (req: NextRequest, params: any) {
    try {
      return await handler(req, params);
    } catch (err: any) {
      if (err?.name === "CastError") {
        err.message = `Resource not found. Invalid ${err?.path}`;
        err.statusCode = 400;
      }
      if (err?.name === "ValidationError") {
        err.message = Object.values<IValidationError>(err.errors).map(
          (error) => {
            return error.message;
          },
        );
        err.statusCode = 400;
      }

      return NextResponse.json(
        { success: false, message: err.message },
        { status: err.statusCode || 500 },
      );
    }
  };
};
