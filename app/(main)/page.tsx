import HotelsGrid from "@/components/hotels/hotels-grid";

export default function Home() {
  return (
    <main className="block mx-auto min-h-screen p-8 max-w-[1460px] w-full">
      <div>
        <h2 className="text-2xl text-center uppercase font-medium">
          All Rooms
        </h2>
      </div>
      <div className="w-full mx-auto">
        <HotelsGrid />
      </div>
    </main>
  );
}
