'use client'
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40
    },
    {
        name: 'Tue',
        present: 20,
        absent: 30
    },
    {
        name: 'Wed',
        present: 40,
        absent: 20
    },
    {
        name: 'Thu',
        present: 30,
        absent: 50
    },
    {
        name: 'Fri',
        present: 30,
        absent: 20
    }
];

const AttendanceChart = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl p-4">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className="capitalize font-bold text-xl">Students</h1>
                <Image src="/moreDark.png" width={20} height={20} alt="more" />
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}

                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#333" }} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar radius={[10, 10, 0, 0]} legendType='circle' dataKey="present" fill="#C3EBFA" />
                    <Bar radius={[10, 10, 0, 0]} dataKey="absent" legendType='circle' fill="#fae27c" />
                </BarChart>
            </ResponsiveContainer></div>
    );
}

export default AttendanceChart
