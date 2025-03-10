import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end md:justify-between p-4 text-gray-600 bg-white text-sm md:text-base">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 md:w-80">
        <BiSearch className="size-5 text-gray-500" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none placeholder-gray-400 text-sm"
          placeholder="Search..."
        />
      </div>
      {/* Icons and user */}

      <div className="flex items-center gap-10">
        <FaRegMessage className="size-4 cursor-pointer" />
        <div className="relative">
          <IoIosNotifications className="size-6 cursor-pointer" />
          <div className="flex justify-center items-center absolute -top-2 -right-2 text-white bg-purple-500 size-5 text-xs rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xs md:text-base cursor-pointer">
            Rawda Yasser
          </p>
          <p className="text-xs text-right">Admin</p>
        </div>
        <div className="bg-gray-300 p-3 rounded-full cursor-pointer">
          <FaUser className="size-4 text-gray-500 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
