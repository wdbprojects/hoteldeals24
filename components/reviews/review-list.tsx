import RatingStars from "@/components/shared/rating-stars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ReviewList = () => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
        {/* REVIEW 1 */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>by Nata Slut</p>
          </div>
          <div className="flex items-center gap-2">
            <RatingStars ratings={5} size="14" />
            <span className="text-sm text-muted-foreground ">July 2024</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.{" "}
            </p>
          </div>
        </div>
        {/* REVIEW 2 */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>by Nata Slut</p>
          </div>
          <div className="flex items-center gap-2">
            <RatingStars ratings={5} size="14" />
            <span className="text-sm text-muted-foreground ">July 2024</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.{" "}
            </p>
          </div>
        </div>
        {/* REVIEW 3 */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>by Nata Slut</p>
          </div>
          <div className="flex items-center gap-2">
            <RatingStars ratings={5} size="14" />
            <span className="text-sm text-muted-foreground ">July 2024</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.{" "}
            </p>
          </div>
        </div>
        {/* REVIEW 4 */}
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>by Nata Slut</p>
          </div>
          <div className="flex items-center gap-2">
            <RatingStars ratings={5} size="14" />
            <span className="text-sm text-muted-foreground ">July 2024</span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
