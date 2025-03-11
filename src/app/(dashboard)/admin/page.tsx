import React from "react";
import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Left */}
      <div className="lg:w-2/3 flex flex-col gap-5">
        <div className=" flex flex-wrap gap-5  ">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Chart */}
        <div></div>
      </div>

      {/* Right */}
      <div className="lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
