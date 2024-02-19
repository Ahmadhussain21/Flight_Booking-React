import React from 'react'
import { useState } from 'react';
import BgImage from '../assets/background.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
  
    if (username && password) {
      
      onLogin(username);
      toast.success("Logged in successfully!");
      
    } else {
      toast.error('Please enter username and password.');
    }
  };

  

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg overflow-hidden border border-indigo-400 transform hover:scale-105 transition duration-300">
         
          <div>
            <h1 className="text-center text-2xl text-indigo-600 font-bold">Login</h1>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-t-0 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21a2 2 0 01-2 2H9a2 2 0 01-2-2v-1.6a3 3 0 012.4-2.928A9.07 9.07 0 0112 7a9.07 9.07 0 012.6 6.472A3 3 0 0117 19v2z" />
                    </svg>
                  )}
                </button>
              </div>
              <button
                onClick={handleLogin}
                className="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </div>
          
      </div>
      <ToastContainer />
    </div>
  );
};


export default Login