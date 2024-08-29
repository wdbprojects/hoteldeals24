import { IRoom } from "@/backend/models/room";
import HotelsGrid from "@/components/hotels/hotels-grid";

interface IDataProps {
  data: {
    success: boolean;
    resPerPage: number;
    roomsCount: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const HomePage = ({ data }: { data: IDataProps }) => {
  const { rooms, resPerPage, filteredRoomsCount, roomsCount } = data;
  return (
    <main className="block mx-auto min-h-screen p-8 max-w-[1460px] w-full">
      <div>
        <h2 className="text-2xl text-center uppercase font-medium">
          All Rooms
        </h2>
      </div>
      <div className="w-full mx-auto">{<HotelsGrid rooms={rooms} />}</div>
    </main>
  );
};

export default HomePage;
