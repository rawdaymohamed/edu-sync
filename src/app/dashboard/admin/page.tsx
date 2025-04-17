import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-5 md:flex-row h-full">
      {/* Left */}
      <div className="w-full md:w-1/2 lg:w-2/3 h-full">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap mb-5">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px] my-5"><FinanceChart /></div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 lg:w-1/3 h-full flex flex-col gap-4">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
