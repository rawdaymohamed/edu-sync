import { BsThreeDots } from "react-icons/bs";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="p-4 rounded-xl odd:bg-purple-400 even:bg-yellow-400 flex-1 min-w-[150px]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] text-green-600 bg-white px-2 py-1 rounded-full">
          Oct 26 2025
        </span>
        <BsThreeDots className="text-white cursor-pointer" />
      </div>
      <h1 className="mb-4 text-2xl font-semibold">1,234</h1>
      <h2 className="text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};
export default UserCard;
