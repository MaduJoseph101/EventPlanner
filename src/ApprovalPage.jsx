import React, { useState, useEffect } from 'react';

function ApprovalPage() {
  const [proposedEvents, setProposedEvents] = useState([]);

  useEffect(() => {
    const proposals = JSON.parse(localStorage.getItem('proposedEvents')) || [];
    setProposedEvents(proposals);
  }, []);

  const handleApprove = (eventId) => {
    const eventToApprove = proposedEvents.find(event => event.id === eventId);
    if (!eventToApprove) return;

    // Add to approved events in localStorage
    const approvedEvents = JSON.parse(localStorage.getItem('approvedEvents')) || [];
    localStorage.setItem('approvedEvents', JSON.stringify([...approvedEvents, { ...eventToApprove, status: 'approved' }]));

    // Remove from proposed events
    const updatedProposals = proposedEvents.filter(event => event.id !== eventId);
    setProposedEvents(updatedProposals);
    localStorage.setItem('proposedEvents', JSON.stringify(updatedProposals));
  };

  const handleDecline = (eventId) => {
    // Remove from proposed events
    const updatedProposals = proposedEvents.filter(event => event.id !== eventId);
    setProposedEvents(updatedProposals);
    localStorage.setItem('proposedEvents', JSON.stringify(updatedProposals));
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#222831] text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#FFD369]">Event Approval</h1>

        {proposedEvents.length === 0 ? (
          <p className="text-center text-gray-400">No pending event proposals.</p>
        ) : (
          <div className="space-y-6">
            {proposedEvents.map(event => (
              <div key={event.id} className="bg-[#393E46] p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
                <div className="grow">
                  <h2 className="text-2xl font-bold text-white mb-2 capitalize">{event.title}</h2>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="text-gray-400 space-y-2 text-sm">
                    <p><span className='font-semibold'>Organizer:</span> {event.organizer}</p>
                    <p><span className='font-semibold'>Location:</span> {event.location}</p>
                    <p><span className='font-semibold'>Date & Time:</span> {event.date} at {event.time}</p>
                    <p><span className='font-semibold'>Ticket:</span> {event.ticket ? `₦${event.ticket}` : 'Free'}</p>
                  </div>
                </div>
                <div className="shrink-0 flex md:flex-col justify-end items-center gap-4">
                  <button
                    onClick={() => handleApprove(event.id)}
                    className="w-full md:w-auto bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecline(event.id)}
                    className="w-full md:w-auto bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ApprovalPage;