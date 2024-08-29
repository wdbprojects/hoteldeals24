import { IRoom } from "@/backend/models/room";
import RoomItem from "@/components/hotels/room-item";

const HotelsGrid = ({ rooms }: { rooms: IRoom[] }) => {
  return (
    <div className="w-full pt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 auto-rows-[1fr]">
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
  );
};

export default HotelsGrid;
