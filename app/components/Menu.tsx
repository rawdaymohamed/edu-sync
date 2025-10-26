import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaHome,
  FaUserFriends,
  FaUserGraduate,
  FaClipboardList,
  FaClipboardCheck,
  FaBookOpen,
  FaFileAlt,
  FaCalendarAlt,
  FaEnvelope,
  FaBullhorn,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const menuItems = [
  {
    title: "MENU",
    items: [
      { name: "Home", link: "/", icon: <FaHome /> },
      { name: "Teachers", link: "/teacher", icon: <FaChalkboardTeacher /> },
      { name: "Students", link: "/student", icon: <FaUserGraduate /> },
      { name: "Parents", link: "/parent", icon: <FaUserFriends /> },
      { name: "Classes", link: "/class", icon: <FaClipboardList /> },
      { name: "Lessons", link: "/lesson", icon: <FaBookOpen /> },
      { name: "Exams", link: "/exam", icon: <FaClipboardCheck /> },
      { name: "Assignments", link: "/assignment", icon: <FaFileAlt /> },
      { name: "Attendance", link: "/attendance", icon: <FaClipboardCheck /> },
      { name: "Events", link: "/event", icon: <FaCalendarAlt /> },
      { name: "Messages", link: "/message", icon: <FaEnvelope /> },
      { name: "Announcements", link: "/announcement", icon: <FaBullhorn /> },
    ],
  },
  {
    title: "OTHER",
    items: [
      { name: "Profile", link: "/profile", icon: <FaUserCircle /> },
      { name: "Settings", link: "/settings", icon: <IoSettingsSharp /> },
      { name: "Logout", link: "/sign-in", icon: <FaSignOutAlt /> },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-8">
      {menuItems.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xs font-light text-gray-500 px-2 mb-4 hidden lg:block">
            {section.title}
          </h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.link}
                  className="flex items-center gap-3 text-gray-700 px-2 py-2 rounded"
                >
                  <span className="size-5">{item.icon}</span>
                  <span className="hidden lg:block">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
