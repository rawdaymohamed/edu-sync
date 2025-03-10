import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { PiStudentDuotone } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdOutlineEmojiEvents, MdOutlineFamilyRestroom } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import {
  IoBookOutline,
  IoLogOutOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { MdOutlineAssignmentInd } from "react-icons/md";

import { IoMdRibbon } from "react-icons/io";
import { FaCheck, FaRegMessage, FaUser } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
interface MenuItem {
  icon?: IconType;
  label: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: GoHome,
        label: "Home",
        href: "/home",
      },
      {
        icon: PiStudentDuotone,
        label: "Student",
        href: "/student",
      },
      {
        icon: PiChalkboardTeacherLight,
        label: "Teacher",
        href: "/teacher",
      },
      {
        icon: MdOutlineFamilyRestroom,
        label: "Parent",
        href: "/parent",
      },
      {
        icon: MdOutlineClass,
        label: "Class",
        href: "/class",
      },
      {
        icon: IoBookOutline,
        label: "Subjects",
        href: "/list/subjects",
      },
      {
        icon: SiGoogleclassroom,
        label: "Classes",
        href: "/list/classes",
      },
      {
        icon: MdOutlinePlayLesson,
        label: "Lessons",
        href: "/list/lessons",
      },
      {
        icon: PiExam,
        label: "Exams",
        href: "/list/exams",
      },
      {
        icon: MdOutlineAssignmentInd,
        label: "Assignments",
        href: "/list/assignments",
      },
      {
        icon: IoMdRibbon,
        label: "Results",
        href: "/list/results",
      },
      {
        icon: FaCheck,
        label: "Attendance",
        href: "/list/attendance",
      },
      {
        icon: MdOutlineEmojiEvents,
        label: "Events",
        href: "/list/events",
      },
      {
        icon: FaRegMessage,
        label: "Messages",
        href: "/list/messages",
      },
      {
        icon: TfiAnnouncement,
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: FaUser,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: IoSettingsSharp,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: IoLogOutOutline,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <ul className="space-y-5 text-md">
      {menuItems.map((menuItem) => (
        <li key={menuItem.title} className="space-y-2">
          <div className="font-light text-sm hidden lg:block ">
            {menuItem.title}
          </div>

          <ul className="space-y-4">
            {menuItem.items.map((item) => {
              const IconComponent = item.icon; // Get the icon component

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex gap-2 items-center justify-center lg:justify-start text-gray-600"
                  >
                    {IconComponent && (
                      <IconComponent className="menu-icon text-xl size-5" />
                    )}
                    <span className="hidden lg:block ">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
