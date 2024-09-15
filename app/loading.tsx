import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen translate-y-[-50px]">
      <Loader size={36} strokeWidth={1.25} className="animate-ping" />
    </div>
  );
}
