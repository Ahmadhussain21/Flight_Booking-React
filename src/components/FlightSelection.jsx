
import React, { useState } from 'react';
import Modal from 'react-modal';
import DateSelection from './DateSelection';
import 'animate.css/animate.min.css';
import BgImage from '../assets/background3.jpg'

const FlightSelection = ({ flights, onSelectFlight }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [searchedFlights, setSearchedFlights] = useState([]);

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setModalIsOpen(true);
    
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedFlight(null);
   
  };

  const handleSearch = () => {
    const filteredFlights = flights.filter(flight =>
      flight.startCity.toLowerCase().includes(searchFrom.toLowerCase()) &&
      flight.destination.toLowerCase().includes(searchTo.toLowerCase())
    );
    setSearchedFlights(filteredFlights);
  };

  return (
    <div className={` min-h-screen py-8 ${modalIsOpen ? 'blur' : ''}`}style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl flex justify-center font-semibold text-white mb-8">Flight Selection</h1>
        <div className="flex justify-center items-center mb-4">

        <select
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white bg-opacity-75 text-gray-800 shadow-md"
          >
            <option value="">Select From</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <select
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white bg-opacity-75 text-gray-800 shadow-md"
          >
            <option value="">Select To</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <button onClick={handleSearch} className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md">Search</button>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {searchedFlights.map(flight => (
            <div key={flight.id} className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">{flight.CompanyName}</h2>
              <p className="mb-2 text-indigo-600 font-semibold">{flight.startCity} to {flight.destination}</p>
              <p className="mb-2 text-indigo-600">Type: {flight.busType}</p>
              <p className="mb-2 text-indigo-600">Number: {flight.busNumber}</p>
              <p className="mb-2 text-indigo-600">Time: {flight.time}</p>
              <p className="mb-2 text-indigo-600">Price: Rs {flight.pricePerSeat}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md" onClick={() => handleFlightSelect(flight)}>Select Flight</button>
            </div>
          ))}
        </div>
        </div>
        
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="Modal animate__animated animate__slideInDown"
        overlayClassName="Overlay"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'fixed', 
            zIndex: '9999', 
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '999', 
          },
        }}
      >
        <DateSelection onClose={handleCloseModal} onDateSelect={(date) => onSelectFlight(selectedFlight.id, date)} />
      </Modal>
    </div>
  );
};

export default FlightSelection;