import HomePage from "@/pages/home-page";
import Error from "@/app/error";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Hotel Deals",
};
const getRooms = async (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();
  const response = await fetch(
    `${process.env.API_URL}/api/rooms?${queryString}`,
    {
      cache: "no-cache",
    },
  );
  return response.json();
};

export default async function Page({ searchParams }: { searchParams: string }) {
  const data = await getRooms(searchParams);

  if (data?.message) {
    return <Error error={data} />;
  }

  return <HomePage data={data} />;
}
