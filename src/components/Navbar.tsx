import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3 py-2">
        <Image src="/search.png" width={14} height={14} alt="search icon" />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>

      {/* Icons and User */}
      <div className="flex gap-7 justify-end w-full ">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message" />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="announcement"
          />
          <div className="rounded-full cursor-pointer text-xs text-white flex items-center justify-center bg-purple-500 h-5 w-5 absolute -top-3 -right-3">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Student</span>
        </div>

        <Image
          src="/avatar.png"
          width={36}
          height={36}
          alt="User"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
