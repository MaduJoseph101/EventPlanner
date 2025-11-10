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
      <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-2xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#FFD369]">Proposal Submitted</h1>
          <p className="text-gray-300">Thank you! Your event proposal has been received and is pending review.</p>
        </div>

        {/* Proposal Summary Card */}
        <div className="mt-8 bg-[#222831] rounded-lg shadow-inner p-6">
          <div className="space-y-6">
            {details.eventposter && (
              <img
                className='w-full h-48 md:h-64 object-cover object-center rounded-lg'
                src={URL.createObjectURL(details.eventposter)}
                alt={details.title}
              />
            )}

            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Event Title</p>
              <h2 className="text-2xl font-bold text-white capitalize">{details.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="font-semibold">{details.date}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="font-semibold">{details.time}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="font-semibold">{details.location}</span>
                </div>
              </div>
              <div>
                
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                  <span className="font-semibold">{details.ticket ? `₦${details.ticket}` : 'Free'}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e4a238]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span className="font-semibold capitalize">{details.organizer}</span>
            </div>

            <hr className="border-gray-600" />

            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Description</p>
              <p className="text-gray-300 mt-2">{details.description}</p>
            </div>
          </div>
        </div>

        {/* Countdown Popup */}
        <div className="mt-8 text-center text-sm text-gray-400 ">
          <p>Redirecting in <span className="font-bold text-[#e4a238]">{countdown}</span> seconds...</p>
        </div>
      </div>
    </div>
  );
}

export default CreatedEventConfirmation;