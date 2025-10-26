import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* Left */}
      <div className="w-full md:w-1/2 lg:w-2/3">
        <div className="flex flex-wrap gap-4 justify-between">
          {/* User Cards */}
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/2 lg:w-1/3">Right Content</div>
    </div>
  );
};

export default AdminPage;
