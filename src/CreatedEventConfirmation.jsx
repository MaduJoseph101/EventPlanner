import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CreatedEventConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state?.eventdetails;

  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/addEvent');
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
        <h1 className="text-2xl font-bold">No event data found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#222831] text-white p-4 sm:p-8 flex items-center justify-center">
      <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#FFD369]">Event Created Successfully!</h1>
        
        {details.eventImage && (
          <img
            className='w-full h-48 sm:h-64 object-cover object-center rounded-lg mb-6'
            src={URL.createObjectURL(details.eventImage)}
            alt={details.title}
          />
        )}

        <div className="space-y-4">
          <div>
            <p className="text-gray-400 font-semibold">Event Title:</p>
            <p className="text-lg">{details.title}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Description:</p>
            <p className="text-base">{details.description}</p>
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

export default CreatedEventConfirmation;