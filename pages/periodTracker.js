import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Navbar from '@/components/navbar';
const PeriodTracker = () => {
  const [startDate, setStartDate] = useState(null);
  const [periodDays, setPeriodDays] = useState(5); // Default period duration
  const [endDate, setEndDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28); // Default menstrual cycle length

  const handleDateChange = (ranges) => {
    // Extract start and end dates from the range
    const { startDate, endDate } = ranges.selection;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const markPeriodDates = () => {
    // Calculate period dates based on user input
    if (startDate) {
      const periodStartDate = startDate;
      const periodEndDate = new Date(startDate);
      periodEndDate.setDate(periodEndDate.getDate() + periodDays - 1); // Subtract 1 as the start date is included

      // Calculate the start date for the previous month
      const prevMonthStartDate = new Date(startDate);
      prevMonthStartDate.setDate(prevMonthStartDate.getDate() - cycleLength); // Subtract cycle length for the previous month start
      const prevMonthEndDate = new Date(prevMonthStartDate);
      prevMonthEndDate.setDate(prevMonthEndDate.getDate() + periodDays - 1); // Subtract 1 as the start date is included

      // Calculate the start date for the next month
      const nextMonthStartDate = new Date(startDate);
      nextMonthStartDate.setDate(nextMonthStartDate.getDate() + cycleLength); // Add cycle length for the next month start
      const nextMonthEndDate = new Date(nextMonthStartDate);
      nextMonthEndDate.setDate(nextMonthEndDate.getDate() + periodDays - 1); // Subtract 1 as the start date is included

      // Calculate the start and end dates for the current month
      const currentMonthStartDate = startDate;
      const currentMonthEndDate = periodEndDate;

      return [
        { startDate: prevMonthStartDate, endDate: prevMonthEndDate, key: 'prev' },
        { startDate: currentMonthStartDate, endDate: currentMonthEndDate, key: 'current' },
        { startDate: nextMonthStartDate, endDate: nextMonthEndDate, key: 'next' },
      ];
    }
    return [];
  };

  const markedDates = markPeriodDates();

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8">PERIOD TRACKER</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">When did your last period start?</label>
          <input type="date" onChange={(e) => setStartDate(new Date(e.target.value))} className="border border-gray-300 px-4 py-2 rounded-lg w-full mb-4" />
          <label className="block mb-2 font-semibold">How many days did it last?</label>
          <input type="number" value={periodDays} onChange={(e) => setPeriodDays(parseInt(e.target.value))} className="border border-gray-300 px-4 py-2 rounded-lg w-full" />
          <label className="block mb-2 mt-4 font-semibold">What is the length of your menstrual cycle (in days)?</label>
          <input type="number" value={cycleLength} onChange={(e) => setCycleLength(parseInt(e.target.value))} className="border border-gray-300 px-4 py-2 rounded-lg w-full mb-4" />
        </div>
        <div className="flex justify-center items-center">
          <img src="../p1.png" alt="Period Tracker Image" className="max-w-md max-h-md" />
        </div>
      </div>
     
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Period Dates:</h3>
        <DateRangePicker
          ranges={markedDates}
          onChange={handleDateChange}
          months={3} // Show 3 months in the DateRangePicker
          direction="horizontal"
          showSelectionPreview={false} // Hide the sidebar with options like "Today", "Yesterday", etc.
        />
      </div>
    </div>
    </div>
  );
};

export default PeriodTracker;
