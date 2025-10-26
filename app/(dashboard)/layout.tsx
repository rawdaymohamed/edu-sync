import Link from "next/link";
import { FaBookReader } from "react-icons/fa";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start lg:gap-2"
        >
          <FaBookReader className="font-bold size-6" />
          <span className="hidden lg:block lg:text-lg font-bold">EduSync</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-100 overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
