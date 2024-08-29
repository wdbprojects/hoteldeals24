import RoomMap from "@/components/shared/room-map";
import NewReview from "@/components/reviews/new-review";
import ReviewList from "@/components/reviews/review-list";
import { Separator } from "@/components/ui/separator";

const HotelDescription = ({ room }) => {
  return (
    <div className="border min-h-[200px] w-full min-w-0 p-4 rounded-sm">
      <p className="text-sm leading-8">{room?.description}</p>
      <div>
        <RoomMap />
      </div>
      <Separator className="my-6" />
      <div>
        <NewReview />
        <ReviewList />
      </div>
    </div>
  );
};

export default HotelDescription;
