import Image from "next/image";
import Link from "next/link";
import React from "react";
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "teacher.png",
        label: "Teachers",
        href: "/teachers",
      },
      {
        icon: "student.png",
        label: "Students",
        href: "/students",
      },
      {
        icon: "parent.png",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "class.png",
        label: "Classes",
        href: "/classes",
      },
      {
        icon: "lesson.png",
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: "exam.png",
        label: "Exams",
        href: "/exams",
      },
      {
        icon: "assignment.png",
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: "attendance.png",
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: "calendar.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: "message.png",
        label: "Messages",
        href: "/messages",
      },
      {
        icon: "announcement.png",
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "setting.png",
        label: "settings",
        href: "/settings",
      },
      {
        icon: "logout.png",
        label: "Logout",
        href: "/logouts",
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {menuItems.map((menuItem) => (
        <div key={menuItem.title} className="flex flex-col gap-5">
          <span className="hidden lg:block text-gray-600 font-light my-2">
            {menuItem.title}
          </span>
          <div className="space-y-4">
          {menuItem.items.map((item) => (
            <Link
              className="flex gap-4 items-center justify-center lg:justify-start"
              key={item.label}
              href={item.href}
            >
              <Image
                src={`/${item.icon}`}
                width={20}
                height={20}
                alt={item.label}
              />
              <span className="hidden lg:block text-gray-700">
                {item.label}
              </span>
            </Link>
          ))}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
