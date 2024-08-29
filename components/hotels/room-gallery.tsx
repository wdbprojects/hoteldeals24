import Image from "next/image";
import img1 from "@/public/testImages/img1.jpg";
import img2 from "@/public/testImages/img2.jpg";
import img3 from "@/public/testImages/img3.jpg";
import img4 from "@/public/testImages/img4.jpg";
import img5 from "@/public/testImages/img5.jpg";
import { IImage } from "@/backend/models/room";

interface IImageProps {
  images: IImage[];
}

const RoomGallery = ({ images }: IImageProps) => {
  return (
    <div className="w-full min-h-[300px] grid grid-cols-4 auto-rows-[200px] lg:auto-rows-[300px] gap-2 rounded-lg overflow-hidden">
      <Image
        src={images[0]?.url || img1}
        width={800}
        height={800}
        className="object-cover w-full h-full col-span-2 row-span-2"
        alt="img1"
      />
      <Image
        src={images[1]?.url || img2}
        width={800}
        height={800}
        className="object-cover w-full h-full"
        alt="img2"
      />
      <Image
        src={images[2]?.url || img3}
        width={800}
        height={800}
        className="object-cover w-full h-full"
        alt="img4"
      />
      <Image
        src={images[3]?.url || img4}
        width={800}
        height={800}
        className="object-cover w-full h-full"
        alt="img4"
      />
      <Image
        src={images[4]?.url || img5}
        width={800}
        height={800}
        className="object-cover w-full h-full"
        alt="img5"
      />
    </div>
  );
};

export default RoomGallery;
