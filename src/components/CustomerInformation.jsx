import React, { useState } from 'react';
import BgImage from '../assets/background2.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerInformation = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [seat, setSeat] = useState('');
  const [seatType, setSeatType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && gender && dob && email && phone && seat && seatType) {
      if(seat<=0){
        toast.error('Atleast book ONE seat');
      }
      else{
        const customerData = { firstName, lastName, gender, dob, email, phone, seat, seatType };
        onNext(customerData);
        toast.success('Form Filled successfully!');
      }
      
    } else {
      toast.error('Please Fill all Fields');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-lg mx-auto bg-white bg-opacity-75 rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2">Customer Information</h1>
        <form onSubmit={handleSubmit} className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block mb-1 text-sm">Date of Birth</label>
              <input
                type="date"
                placeholder="Date of Birth"
                max={new Date().toISOString().split('T')[0]}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="mt-4">
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm">Phone</label>
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-4">
              <label className="block mb-1 text-sm">Total Seats</label>
              <input
                type="number"
                placeholder="Total Seats"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                step="1"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-sm">Seat Type</label>
              <select
                value={seatType}
                onChange={(e) => setSeatType(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Seat Type</option>
                <option value="Window">Window</option>
                <option value="Mid">Mid</option>
                <option value="Side">Side</option>
              </select>
            </div>
        </div>
          
          <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-indigo-600 transition duration-300 w-full">Next</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomerInformation;
