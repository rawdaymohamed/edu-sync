import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaSchool } from "react-icons/fa6";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[9%] lg:w-[16%] xl:w-[14%] p-4 h-full overflow-y-scroll">
        {/* Logo */}
        <Link
          href="/"
          className="text-gray-700 flex gap-2 items-center justify-center lg:justify-start"
        >
          <FaSchool className="size-6" />
          <span className="font-bold text-xl hidden lg:block">EduSync</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[91%] lg:w-[84%] xl:w-[86%] h-full overflow-y-scroll bg-[#f7f8fa]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
