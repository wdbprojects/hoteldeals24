import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewReview = () => {
  return (
    <div className="mb-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Submit Review</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submit your review</DialogTitle>
            <DialogDescription>
              Be a descriptive as possible. Please do not use hateful words.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-start justify-center gap-6 mt-4">
            <Textarea placeholder="Start writting..." />
            <Button>Send message</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewReview;
