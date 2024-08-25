import RoomItem from "@/components/hotels/room-item";

const HotelsGrid = () => {
  return (
    <div className="w-full pt-8 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </div>
  );
};

export default HotelsGrid;
