"use client"
import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,

    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,

    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,

    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,

    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,

    },
    {
        name: "Jun",
        income: 2390,
        expense: 3800,

    },
    {
        name: 'Jul',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Aug',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Oct',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Nov',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Dec',
        income: 3490,
        expense: 4300,

    },
];
const FinanceChart = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl p-4">
            {/* Title */}
            <div className="flex justify-between items-center mb-5">
                <h1 className="capitalize font-bold text-xl">Finance</h1>
                <Image src="/moreDark.png" width={20} height={20} alt="more" />
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis tickLine={false} dataKey="name" axisLine={false} tick={{ fill: "#333" }} tickMargin={10} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "#333" }} tickMargin={10} />
                    <Tooltip />
                    <Legend align='center' verticalAlign='middle' wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }} />
                    <Line
                        legendType='circle'
                        type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={3} />
                    <Line legendType="circle" type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart
