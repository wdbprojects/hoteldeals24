"use client";
import Loading from "@/app/loading";
import { IRoom } from "@/backend/models/room";
import HotelsGrid from "@/components/hotels/hotels-grid";
import { useSearchParams } from "next/navigation";

interface IDataProps {
  data: {
    success: boolean;
    resPerPage: number;
    roomsCount: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const HomePage = ({ data }: IDataProps) => {
  const searchParams = useSearchParams();
  if (!searchParams) {
    return <Loading />;
  }
  const location = searchParams.get("location");

  return (
    <main className="block mx-auto min-h-screen p-8 max-w-[1460px] w-full">
      <div>
        <h2 className="text-2xl text-center font-medium">
          {location
            ? `Rooms found with location ${location.toUpperCase()}: ${
                data.filteredRoomsCount
              }`
            : "All Rooms"}
        </h2>
      </div>
      <div className="w-full mx-auto">{<HotelsGrid data={data} />}</div>
    </main>
  );
};

export default HomePage;
