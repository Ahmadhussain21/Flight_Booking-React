import React from 'react';
import BgImage from '../assets/background2.jpg';

const BookingConfirmation = ({ user, selectedFlight, selectedDate, customerInfo }) => {
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">Booking Confirmation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-md border border-indigo-400 transform hover:scale-105 transition duration-300">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Flight Details</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-900">
                <FlightDetail label="Company Name" value={selectedFlight.CompanyName} />
                <FlightDetail label="Type" value={selectedFlight.busType} />
                <FlightDetail label="Number" value={selectedFlight.busNumber} />
                <FlightDetail label="From" value={selectedFlight.startCity} />
                <FlightDetail label="To" value={selectedFlight.destination} />
                <FlightDetail label="Price" value={`Rs ${selectedFlight.pricePerSeat}`} />
                <FlightDetail label="Date" value={selectedDate} />
                <FlightDetail label="Time" value={selectedFlight.time} />
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-md border border-indigo-400 transform hover:scale-105 transition duration-300">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Passenger Details</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <PassengerDetail label="First Name" value={customerInfo.firstName} />
                <PassengerDetail label="Last Name" value={customerInfo.lastName} />
                <PassengerDetail label="Date Of Birth" value={customerInfo.dob} />
                <PassengerDetail label="Gender" value={customerInfo.gender} />
                <PassengerDetail label="Email" value={customerInfo.email} />
                <PassengerDetail label="Phone" value={customerInfo.phone} />
                <PassengerDetail label="Seat" value={customerInfo.seat} />
                <PassengerDetail label="Seat Type" value={customerInfo.seatType} />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-lg text-indigo-600 font-bold mt-4">Thank you for booking with us, {user}!</p>
      </div>
    </div>
  );
};

const FlightDetail = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600">{label}</span>
      <p className="py-2 px-3 bg-gray-100 rounded-md text-gray-800">{value}</p>
    </div>
  );
};

const PassengerDetail = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600">{label}</span>
      <p className="py-2 px-3 bg-gray-100 rounded-md text-gray-800">{value}</p>
    </div>
  );
};

export default BookingConfirmation;
