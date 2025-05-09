"use client"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const BigCalendar = () => (
    <div className="h-full">
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)
export default BigCalendar;