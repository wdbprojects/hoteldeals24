"use client";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer bg-white/50 dark:bg-black/50 border-none"
      onClick={() => {
        alert("Welcome to abundance!");
      }}
    >
      <Heart />
    </Button>
  );
};

export default FavoriteToggleButton;
