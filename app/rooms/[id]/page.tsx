import Error from "@/app/error";
import RoomDetails from "@/components/hotels/room-details";
import { Metadata } from "next";

interface ParamsProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ParamsProps) {
  const data = await getRoom(params?.id);
  return { title: data?.room?.name };
}

const getRoom = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return response.json();
};

const RoomDetailsPage = async ({ params }: ParamsProps) => {
  const data = await getRoom(params?.id);

  if (data?.message) return <Error error={data} />;

  return <RoomDetails data={data} />;
};

export default RoomDetailsPage;
