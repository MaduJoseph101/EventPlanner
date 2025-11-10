import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Form() {
  const location = useLocation();
  const  event  = location.state?.selectedEvent;


  if (!event) {
    return (
      <div className="min-h-screen bg-[#222831] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">No event data found.</h1>
      </div>
    );
  }

  // STUDENT DATA
  let [StudentData, setStudentData] = useState({
    fullname: "",
    level: "",
    matric_number: "",
    department: "",
  });

  const [notification, setNotification] = useState(
    { 
      show: false, 
      message: 'Invalid Matric Number.' 
    });

  let navigate = useNavigate();

  let InputChange =(data)=>{
    setStudentData({...StudentData, [data.target.name]: data.target.value })
  }

  // SUBMIT FUNCTION
  let FormSubmit =(e)=>{
    e.preventDefault();

    if (StudentData.matric_number.length !== 9) {
      setNotification({ show: true, message: 'Invalid Matric Number.' });
      
      const timer = setTimeout(() => setNotification({ show: false, message: 'Invalid Matric Number.' }), 3000);
      return;
    }

    navigate('/formconfirmation', { state: { formdetails: {...StudentData, ...event } } });

  }

  return (
    <div className="min-h-screen bg-[#222831] text-white p-4 sm:p-8">
      {/* NOTIFICATION POPUP */}

      <div
        className={`fixed top-5 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
          notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <p>{notification.message}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Register for an Event</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg">
            <img
              className='w-full h-48 sm:h-64 object-cover rounded-lg mb-6'
              src={event.imageUrl}
              alt={event.title}
            />

            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
            <p className="text-gray-300 mb-4">{event.description}</p>
            <div className="text-gray-400 space-y-2">
              <p><span className='font-semibold'>Location:</span> {event.location}</p>
              <p><span className='font-semibold'>Date:</span> {event.date}</p>
              <p><span className='font-semibold'>Time:</span> {event.time}</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Your Information</h2>

            <form onSubmit={FormSubmit}>
              <div className="space-y-6">

                <div>
                  <label htmlFor="fullname" className="block text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    name='fullname'
                    id="fullname" 
                    className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300 capitalize"
                    placeholder="John Doe"
                    required
                    onChange={InputChange}
                  />
                </div>

                <div>
                  <label htmlFor="level" className="block text-sm font-bold mb-2 uppercase tracking-wider">Level</label>
                  <input 
                    type="number" 
                    name='level'
                    id="level" 
                    className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                    required
                    onChange={InputChange}
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-bold mb-2 uppercase tracking-wider">Department</label>
                  <input 
                    type="text" 
                    name='department'
                    id="department" 
                    className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring capitalize focus:ring-[rgb(255,211,105)] focus:ring-opacity-50 transition-colors duration-300"
                    required
                    onChange={InputChange}
                  />
                </div>

                <div>
                  <label htmlFor="matric_number" className="block text-sm font-bold mb-2 uppercase tracking-wider">Matric Number</label>
                  <input 
                    type="number" 
                    id="matric_number"
                    name='matric_number'
                    className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                    maxLength={10}
                    required
                    onChange={InputChange}

                  />
                </div>
              </div>


              <button 
                type="submit" 
                className="mt-8 w-full bg-[#e4a238] text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 cursor-pointer transition-transform transform hover:scale-[1.02] duration-300"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Form;
