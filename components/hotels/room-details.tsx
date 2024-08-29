import { IRoom } from "@/backend/models/room";
import RoomGallery from "@/components/hotels/room-gallery";
import HotelDescription from "@/components/hotels/hotel-description";
import CallToAction from "@/components/hotels/call-to-action";
import RatingStars from "@/components/shared/rating-stars";
import RoomFeatures from "@/components/shared/room-features";

interface DataProps {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data: { room } }: DataProps) => {
  return (
    <main className="mx-auto max-w-7xl px-8 py-3 w-full">
      {/* ROOM DETAILS HEADER */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-2xl">{room?.name}</h2>
          <p className="text-sm">{room?.address}</p>
          <div className="flex items-end gap-2">
            <RatingStars ratings={room?.ratings} size="18" />
            <span className="text-sm text-muted-foreground">
              {`${room?.numOfReviews}`} Reviews
            </span>
          </div>
        </div>
        <div>
          <span>share</span>
          <span>save</span>
        </div>
      </div>

      {/* ROOM DETAILS HERO GALLERY */}
      <div className="mb-4">
        <RoomGallery images={room?.images} />
      </div>
      <div className="space-y-8">
        {/* HORIZONTAL FEATURES LIST */}
        <RoomFeatures room={room} />
        {/* TWO COLUMN: DESCRIPTION & CALL TO ACTION */}
        <div className="mx-auto flex w-full grow gap-8">
          <HotelDescription room={room} />
          <CallToAction room={room} />
        </div>
      </div>
    </main>
  );
};

export default RoomDetails;
