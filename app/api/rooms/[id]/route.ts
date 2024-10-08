import dbConnect from "@/backend/config/dbConnect";
import { getSingleRoom } from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getSingleRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
