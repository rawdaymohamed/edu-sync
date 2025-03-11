import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Left */}
      <div className="lg:w-2/3 flex flex-wrap gap-5   ">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
      </div>
      {/* Right */}
      <div className="lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
