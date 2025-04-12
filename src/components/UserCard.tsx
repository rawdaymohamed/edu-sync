import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-300 even:bg-yellow-400 p-4 flex-1 min-h-[130px]">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] px-2 py-1 bg-white text-green-600 rounded-full w-fit">
          4/13/2025
        </span>
        <Image src="/more.png" width={20} height={20} alt="more" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold my-3">1,234</h1>
        <h2 className="capitalize text-gray-500 text-sm font-medium">{type}s</h2>
      </div>
    </div>
  );
};

export default UserCard;
