import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import React from "react";

const StudentPage = () => {
  return <div className="p-4 flex flex-col gap-5 xl:flex-row h-full">
    {/* Left */}
    <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-lg">
        <h1 className="text-xl font-semibold">Schedule (4A)</h1>
        <BigCalendar />
      </div>
    </div>
    {/* Right */}
    <div className="w-full xl:w-1/3">
      <EventCalendar />
      <Announcements />
    </div>
  </div>;
};

export default StudentPage;
