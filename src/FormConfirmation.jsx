import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function FormConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const details = location.state?.formdetails;

  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/register');
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown, navigate]);

  if (!details) {
    return (
      <div className="min-h-screen bg-[#222831] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">No registration data found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#222831] text-white flex items-center justify-center">
      <div className="bg-[#393E46] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FFD369]">Registration Successful!</h1>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 font-semibold">Full Name:</p>
            <p className="text-lg capitalize">{details.fullname}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Level:</p>
            <p className="text-lg">{details.level}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Matric Number:</p>
            <p className="text-lg">{details.matric_number}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Email:</p>
            <p className="text-lg">{details.email}</p>
          </div>

            <div>
            <p className="text-gray-400 font-semibold">Event:</p>
            <p className="text-lg">{details.title}</p>
          </div>   
        

          <div>
            <p className="text-gray-400 font-semibold">Location:</p>
            <p className="text-lg">{details.location}</p>
          </div>

          <div>
            <p className="text-gray-400 font-semibold">Date:</p>
            <p className="text-lg">{details.date}</p>
          </div>
          

          
        </div>

        {/* Countdown Popup */}
        <div className="mt-8 text-center text-sm text-[#e4a238]">
          <p>Redirecting in {countdown} seconds...</p>
        </div>

      </div>
    </div>
  );
}

export default FormConfirmation;