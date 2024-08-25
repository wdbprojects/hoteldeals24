"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import defaultImage from "@/public/images/default_room_image.jpg";
import FavoriteToggleButton from "../shared/favorite-toggle-button";
import RatingStars from "@/components/hotels/rating-stars";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RoomItem = () => {
  return (
    <article className="group relative">
      <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
        <CardContent className="p-4">
          <div className="relative h-64 md:h-48 rounded overflow-hidden">
            <Image
              src={defaultImage}
              alt="hotel image"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px)50vw, 33vw"
              priority
              className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-muted-foreground text-lg capitalize">
              Hotel Mil Estrellas
            </h2>
            <p className="text-foreground text-sm">
              <span className="font-bold">$100</span> per night
            </p>
            <p className="text-muted-foreground text-xs">(50 reviews)</p>
          </div>
          <div className="flex justify-center mt-3">
            <RatingStars />
          </div>
          <Button
            className="w-full mt-6 font-semibold"
            size="sm"
            variant="outline"
            onClick={() => {
              toast.success("Welcome to abundance!!");
            }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      <div className="absolute top-7 right-7 z-5">
        <FavoriteToggleButton productId="3" />
      </div>
    </article>
  );
};

export default RoomItem;
