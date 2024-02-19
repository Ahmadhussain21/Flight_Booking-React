import React, { useState } from 'react';

const DateSelection = ({ onDateSelect, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (e) => {
    setSelectedDate(e.target.value);
    onDateSelect(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg border border-gray-300 p-8">
        <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Date Selection</h1>
        <input
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={selectedDate}
          onChange={handleDateSelect}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button onClick={onClose} className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default DateSelection;