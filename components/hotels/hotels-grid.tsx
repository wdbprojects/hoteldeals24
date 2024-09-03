import { IRoom } from "@/backend/models/room";
import RoomItem from "@/components/hotels/room-item";
import PaginationComp from "@/components/shared/pagination";

interface DataProps {
  data: {
    success: boolean;
    resPerPage: number;
    roomsCount: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const HotelsGrid = ({ data }: DataProps) => {
  const { success, resPerPage, roomsCount, filteredRoomsCount, rooms } = data;

  return (
    <div>
      <div
        className={`w-full pt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:grid-cols-[repeat(2,minmax(220px,1fr))] md:grid-cols-[repeat(3,minmax(220px,1fr))] lg:grid-cols-[repeat(4,minmax(220px,1fr))] gap-5 auto-rows-[1fr]`}
      >
        {rooms?.length === 0 ? (
          <div>
            <h2>No rooms to display</h2>
          </div>
        ) : (
          rooms?.map((room) => {
            return <RoomItem key={room._id} room={room} />;
          })
        )}
      </div>
      {rooms?.length >= resPerPage && (
        <div className="p-4 mt-8 mx-auto w-full">
          <PaginationComp
            resPerPage={resPerPage}
            filteredRoomsCount={filteredRoomsCount}
            roomsCount={roomsCount}
          />
        </div>
      )}
    </div>
  );
};

export default HotelsGrid;
