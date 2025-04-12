"use client";
import React from "react";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#fff",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#fae27c",
  },
];

const CountChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="capitalize font-bold text-xl">Students</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="more" />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="male female" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* Bottom */}
      <div className="flex flex-row justify-center gap-16">
        <div className="flex flex-col gap-2">
          <div className="w-4 h-4 bg-[#C3EBFA] rounded-full" />
          <span className="font-bold">1,234</span>
          <h2 className="text-sm text-gray-500">Boys(55%)</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-4 h-4 bg-[#fae27c] rounded-full" />
          <span className="font-bold">1,124</span>
          <h2 className="text-sm text-gray-500">Girls(45%)</h2>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
