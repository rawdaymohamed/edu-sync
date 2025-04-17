
import React from 'react'

const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-lg '>
            <div className="flex justify-between items-center">
                <h1 className="capitalize font-bold text-xl">Announcements</h1>
                <p className='font-bold text-xs text-gray-500'>View All</p>
            </div>
            <div className='space-y-3 mt-4'>
                <div className='p-3 bg-blue-200 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium text-sm'>Lorem ipsum dolor sit</h2>
                        <p className='rounded-lg px-2 py-1 bg-white text-xs text-gray-600'>4-17-2025</p>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam, quidem consequuntur vel harum iusto natus perspiciatis debitis dolore</p>
                </div>
                <div className='p-3 bg-purple-200 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium text-sm'>Lorem ipsum dolor sit</h2>
                        <p className='rounded-lg px-2 py-1 bg-white text-xs text-gray-600'>4-17-2025</p>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam, quidem consequuntur vel harum iusto natus perspiciatis debitis dolore</p>
                </div>
                <div className='p-3 bg-yellow-200 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium text-sm'>Lorem ipsum dolor sit</h2>
                        <p className='rounded-lg px-2 py-1 bg-white text-xs text-gray-600'>4-17-2025</p>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam, quidem consequuntur vel harum iusto natus perspiciatis debitis dolore</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements
