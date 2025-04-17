"use client"

import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary

const events = [
    {
        id: 1,
        title: "lorem ipsum dolor",
        time: '12:00PM - 2:00PM',
        description: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor"
    },
    {
        id: 2,
        title: "lorem ipsum dolor",
        time: '12:00PM - 2:00PM',
        description: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor"
    },
    {
        id: 3,
        title: "lorem ipsum dolor",
        time: '12:00PM - 2:00PM',
        description: "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor"
    }
];

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-lg '>
            <Calendar onChange={onChange} value={value} />

            <div className='flex flex-col gap-4 mt-5'>
                <div className="flex justify-between items-center">
                    <h1 className="capitalize font-bold text-xl">Events</h1>
                    <Image src="/moreDark.png" width={20} height={20} alt="more" />
                </div>
                {events.map((e) => <div key={e.id} className='p-4 rounded-md border-2 border-gray-300  border-t-2 odd:border-t-blue-400 even:border-t-purple-400'>
                    <div className='flex justify-between items-cente '>
                        <h3 className='font-semibold text-gray-600'>{e.title}</h3>
                        <p className="text-gray-500 text-xs">{e.time}</p>
                    </div>
                    <p className='text-gray-500 mt-2 text-sm'>{e.description}</p>
                </div>
                )}

            </div>
        </div >
    )
}

export default EventCalendar
