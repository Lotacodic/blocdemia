import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import { TbClockPlay } from "react-icons/tb";

interface LessonCardProps {
  title: string;
  duration: string;
  courseImage?: string | StaticImageData;
  isPlaying?: boolean;
  onClick?: () => void;
}

const LessonCard = ({
  title,
  duration,
  courseImage,
  isPlaying = false,
  onClick,
}: LessonCardProps) => {
  return (
    <div
      className="w-full flex items-center gap-6 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative bg-gray-800 w-full max-w-[218px] h-[112px] rounded-md overflow-hidden">
        {courseImage && (
          <Image
            src={courseImage}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
            quality={100}
            unoptimized
          />
        )}

        {/* Progress bars */}
        <div className="absolute bottom-0 left-0 w-full bg-[#545454] h-[4px]" />
        <div className="absolute bottom-0 left-0 bg-[#F32C26] h-[6px] w-1/3 transition-all duration-300 group-hover:w-2/3" />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-medium text-white leading-6 mb-2">
          {title}
        </h2>
        <p className="text-sm text-neutral-90 font-normal flex items-center gap-5">
          <span className="flex items-center gap-2">
            <TbClockPlay size={16} /> {duration}
          </span>
          {isPlaying && (
            <span className="italic text-purple-100">Now playing</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
