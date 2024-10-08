import dbConnect from "@/backend/config/dbConnect";
import { allRooms, getSingleRoom } from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);
router.get(getSingleRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
