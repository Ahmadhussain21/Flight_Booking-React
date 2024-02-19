import React, { useState } from 'react';
import Login from './components/Login';
import FlightSelection from './components/FlightSelection';
import CustomerInformation from './components/CustomerInformation';
import BookingConfirmation from './components/BookingConfirmation';
import flights from './data/flights';

function App() {
  const [user, setUser] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [customerInfo, setCustomerInfo] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleFlightSelection = (flightId,date) => {
    const flight = flights.find(flight => flight.id === flightId);
    setSelectedFlight(flight);
    setSelectedDate(date)
  };


  
  const handleCustomerInfoSubmit = (customerData) => {
    setCustomerInfo(customerData);
  };
  // Implement similar functions for date selection, customer information, and booking confirmation

  return (
    <div className="App">
      <div>
      {!user && <Login onLogin={handleLogin} />}
      {user && !selectedFlight && <FlightSelection flights={flights} onSelectFlight={handleFlightSelection} />}
      {/* {selectedFlight && !selectedDate && <DateSelection onDateSelect={handleDateSelect} />} */}
      {selectedDate && !customerInfo && <CustomerInformation onNext={handleCustomerInfoSubmit} />}
      {customerInfo && (
        <BookingConfirmation
          user={user}
          selectedFlight={selectedFlight}
          selectedDate={selectedDate}
          customerInfo={customerInfo}
        />
      )}
      </div>
      

    </div>
  );
}

export default App;