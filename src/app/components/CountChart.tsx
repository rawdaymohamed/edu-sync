"use client";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#219ebc",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#ffb703",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4 flex flex-col gap-5">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        <MdMoreHoriz className="size-6 text-gray-500 cursor-pointer" />
      </div>
      {/* Chart */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={24}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* Bottom */}
      <div className="flex gap-10 justify-center items-center text-gray-600">
        <div className="flex flex-col gap-2">
          <div className="bg-[#ffb703] size-4 rounded-full" />
          <h2 className="text-sm font-bold">1,234</h2>
          <h2 className="text-sm font-light">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#219ebc]  size-4 rounded-full" />
          <p className="font-bold">2,345</p>
          <h2 className="text-sm font-light">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
