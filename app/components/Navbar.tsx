import { FaSearch, FaUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex justify-end md:justify-between items-center p-4">
      {/* Search input */}
      <div className="flex-1 hidden md:flex items-center relative max-w-xs">
        <FaSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right */}
      <div className="text-gray-700 flex items-center gap-5">
        <div className="relative flex items-center justify-center bg-white p-2 rounded-full cursor-pointer">
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            <span>3</span>
          </div>
          <TfiAnnouncement />
        </div>
        <div className="flex items-center justify-center bg-white p-2 rounded-full cursor-pointer">
          <FaRegMessage />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold cursor-pointer">
            Rawda Yasser
          </div>
          <div className="text-xs text-right cursor-pointer">Admin</div>
        </div>
        <FaUser className="cursor-pointer size-6" />
      </div>
    </div>
  );
};

export default Navbar;
