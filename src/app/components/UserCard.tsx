import React from "react";
import { MdMoreHoriz } from "react-icons/md";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="p-5 odd:bg-[#ffb703] even:bg-[#219ebc] shadow-lg flex flex-col gap-2 rounded-2xl flex-1 min-h-[140px]">
      <div className="flex items-center justify-between">
        <div className="text-green-600 py-0.5 px-4 text-sm bg-gray-50 rounded-full">
          2025/03
        </div>
        <MdMoreHoriz className="size-6 text-gray-300" />
      </div>
      <div className="text-xl xl:text-2xl font-semibold text-gray-700">
        6,123
      </div>
      <div className="text-sm text-gray-600 capitalize"> {type}s</div>
    </div>
  );
};

export default UserCard;
