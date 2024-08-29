import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BookingDatePicker from "../shared/booking-date-picker";

const CallToAction = ({ room }) => {
  return (
    <div className="border min-h-[200px] !sticky top-[5.25rem] h-fit flex-none space-y-6 rounded-2xl bg-muted px-3 py-5 shadow-lg sm:block lg:px-5 xl:w-80 w-[300px]">
      <div>
        <p className="font-semibold text-2xl">
          $146 USD <span className="font-normal text-base">night</span>
        </p>
      </div>
      <div className="my-4 text-sm font-medium">
        <BookingDatePicker room={room} />
      </div>
      <div>
        <Button size="lg" variant="default" className="w-full">
          Reserve
        </Button>
        <p className="text-center text-xs font-light mt-2">
          You won't be charged yet
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span>$146 USD x 5 nights</span>
          <span>$732 USD</span>
        </div>
        <Separator className="my-4 bg-muted-foreground/30" />
        <div className="flex justify-between items-center font-semibold">
          <span>Total</span>
          <span>$732 USD</span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
