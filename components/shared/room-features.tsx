import { IRoom } from "@/backend/models/room";
import {
  AirVent,
  BedDouble,
  CigaretteOff,
  CookingPot,
  Dog,
  EggFried,
  House,
  Martini,
  ShowerHead,
  SquareParking,
  Tv,
  Users,
  Wifi,
} from "lucide-react";

interface IRoomProps {
  room: IRoom;
}

const RoomFeatures = ({ room }: IRoomProps) => {
  return (
    <ul className="min-h-[50px] w-full flex gap-3 items-center justify-evenly flex-wrap">
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <House size={24} strokeWidth={1.5} className="text-muted-foreground" />
        <span className="text-muted-foreground">
          Guest capacity: {room?.guestCapacity}
        </span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <BedDouble
          size={24}
          strokeWidth={1.5}
          className="text-muted-foreground"
        />
        <span className="text-muted-foreground">
          Number of beds: {room?.numOfBeds}
        </span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <Wifi size={24} strokeWidth={1.5} className="text-muted-foreground" />
        <span
          className={`text-muted-foreground ${
            !room?.internet && "line-through"
          }`}
        >
          Free Wifi Internet
        </span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <EggFried
          size={24}
          strokeWidth={1.5}
          className={`text-muted-foreground ${
            !room?.breakfast && "line-through"
          }`}
        />
        <span className="text-muted-foreground">Breakfast</span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <AirVent
          size={24}
          strokeWidth={1.5}
          className="text-muted-foreground"
        />
        <span
          className={`text-muted-foreground ${
            !room?.airCondition && "line-through"
          }`}
        >
          Air Conditioner
        </span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <Dog size={24} strokeWidth={1.5} className="text-muted-foreground" />
        <span
          className={`text-muted-foreground ${
            !room?.petsAllowed && "line-through"
          }`}
        >
          Pets allowed
        </span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <CigaretteOff
          size={24}
          strokeWidth={1.5}
          className="text-muted-foreground"
        />
        <span className="text-muted-foreground">Non-smoking Rooms</span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <ShowerHead
          size={24}
          strokeWidth={1.5}
          className={`text-muted-foreground ${
            !room?.petsAllowed && "line-through"
          }`}
        />
        <span className="text-muted-foreground">Room cleaning</span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <Martini
          size={24}
          strokeWidth={1.5}
          className="text-muted-foreground"
        />
        <span className="text-muted-foreground">Minibar</span>
      </li>
      <li className="px-4 py-4 border rounded-sm grow flex items-center gap-2">
        <Tv size={24} strokeWidth={1.5} className="text-muted-foreground" />
        <span className="text-muted-foreground">Flat-screen TV</span>
      </li>
    </ul>
  );
};

export default RoomFeatures;
