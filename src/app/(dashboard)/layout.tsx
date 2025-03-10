import Link from "next/link";

import Menu from "../components/Menu";
import { IoMdSchool } from "react-icons/io";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Left */}
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[12%] overflow-y-scroll p-5 space-y-5">
        <Link
          href="/"
          className="text-gray-900 flex items-center justify-center lg:justify-start gap-2"
        >
          <IoMdSchool className="size-8" />
          <span className="hidden lg:block font-bold">EduSync</span>
        </Link>

        <Menu />
      </div>
      {/* Right */}
      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[88%] bg-[#f7f8fa] overflow-scroll">
        {children}
      </div>
    </div>
  );
}
