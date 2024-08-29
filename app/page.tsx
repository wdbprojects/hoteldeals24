import HomePage from "@/pages/home-page";
import Error from "@/app/error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Hotel Deals",
};
const getRooms = async () => {
  const response = await fetch(`${process.env.API_URL}/api/rooms`, {
    cache: "no-cache",
  });
  return response.json();
};

export default async function Page() {
  const data = await getRooms();

  if (data?.message) {
    return <Error error={data} />;
  }

  return <HomePage data={data} />;
}
