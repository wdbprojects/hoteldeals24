"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import defaultImage from "@/public/images/default_room_image.jpg";
import FavoriteToggleButton from "../shared/favorite-toggle-button";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IRoom } from "@/backend/models/room";
import RatingStars from "@/components/shared/rating-stars";
import Link from "next/link";

interface IRoomProps {
  room: IRoom;
}

const RoomItem = ({ room }: IRoomProps) => {
  return (
    <article className="group relative">
      <Card className="transform group-hover:shadow-xl transition-shadow duration-500 h-full">
        <CardContent className="p-4 h-full flex flex-col justify-between">
          <div>
            <div className="relative h-64 md:h-48 rounded overflow-hidden">
              <Link href={`/rooms/${room?._id}`}>
                <Image
                  src={room?.images[0].url}
                  alt={room?.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px)50vw, 33vw"
                  priority
                  className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <h2 className="mt-2 text-center text-muted-foreground text-lg capitalize">
              {room?.name}
            </h2>
          </div>

          <div>
            <div className="mt-2 text-center">
              <p className="text-foreground text-sm">
                <span className="font-bold text-lg">${room.pricePerNight}</span>{" "}
                per night
              </p>
              <p className="text-muted-foreground text-xs">
                ({`${room?.numOfReviews} reviews`})
              </p>
            </div>
            <div className="flex justify-center mt-3">
              <RatingStars ratings={room?.ratings} size="24px" />
            </div>
            <Button
              className="w-full mt-6 font-semibold"
              size="sm"
              variant="outline"
              asChild
            >
              <Link href={`/rooms/${room?._id}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-7 right-7 z-5">
        <FavoriteToggleButton productId="3" />
      </div>
    </article>
  );
};

export default RoomItem;
