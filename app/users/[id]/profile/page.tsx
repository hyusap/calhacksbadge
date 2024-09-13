import {
  FaBookBookmark,
  FaBuildingColumns,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa6";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-screen h-screen bg-accent flex flex-col text-white justify-end">
      <div className="bg-black pt-32 rounded-t-3xl relative">
        <div className="w-full flex justify-center absolute top-0 transform -translate-y-1/2">
          <img
            src={`https://www.github.com/hyusap.png`}
            className="size-48 rounded-full"
          />
        </div>

        <h1 className="text-4xl font-editorial text-center italic">
          Ayush Paul
        </h1>
        <div className="flex flex-col font-normal p-5">
          <div className="flex text-gray-300 gap-3 items-center">
            <FaBuildingColumns />
            <p>University of California, Berkeley</p>
          </div>
          <div className="flex text-gray-300 gap-3 items-center">
            <FaGithub />
            <p>@hyusap</p>
          </div>
          <div className="flex text-gray-300 gap-3 items-center">
            <FaGraduationCap />
            <p>2028</p>
          </div>
          <div className="flex text-gray-300 gap-3 items-center">
            <FaBookBookmark />
            <p>EECS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
