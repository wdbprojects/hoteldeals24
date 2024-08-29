"use client";
import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) => {
  return (
    <div className="flex justify-center items-center h-screen py-8">
      <div className="text-center space-y-8">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <p className="text-lg font-medium">{error.message}</p>
        <Button
          variant="destructive"
          onClick={() => {
            reset?.();
          }}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Error;
