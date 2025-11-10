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
    <div className="min-h-screen bg-[#222831] text-white p-4 sm:p-8 flex flex-col items-center justify-center">
      <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-2xl text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#FFD369]">Registration Successful!</h1>
        <p className="text-gray-300 mb-6 sm:mb-8">You're all set. Here are your event details.</p>

        {/* Ticket Stub */}
        <div className="rounded-lg shadow-inner p-6 sm:p-8 text-left">
          <div className="pb-6">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Event</p>
            <h2 className="text-2xl font-bold text-white mb-4">{details.title}</h2> 
            
            <div className="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{details.location}</span>
            </div>
            
            <div className="flex items-center text-gray-300 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>{details.date}</span>
            </div>
            
            <div className="flex items-center text-gray-300 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{details.time}</span>
            </div>
            
           

            
          </div>

          <hr className="border-gray-600 my-6" />

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Registered To</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              <div>
                <p className="text-xs text-gray-400">Full Name</p>
                <p className="font-semibold capitalize">{details.fullname}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Matric Number</p>
                <p className="font-semibold">{details.matric_number}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Department</p>
                <p className="font-semibold capitalize">{details.department}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Level</p>
                <p className="font-semibold">{details.level}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Popup */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>You will be redirected to the events page in <span className="font-bold text-[#e4a238]">{countdown}</span> seconds...</p>
        </div>
      </div>
    </div>
  );
}

export default FormConfirmation;