import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEvent() {

  let [eventdata,setEventData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    eventImage: null,
  })

   let handleChange =(data)=>{
    if (data.target.type === 'file') {
      setEventData({...eventdata, [data.target.name]: data.target.files[0] });
    } 
    
    else {
      setEventData({...eventdata, [data.target.name]: data.target.value });
    }
  }

  let navigate = useNavigate();
  let SubmitForm =(e)=>{
    e.preventDefault();

    navigate('/createdeventconfirmation', { state: { eventdetails: eventdata }} )
  }

  return (
    <div className="min-h-screen bg-[#222831] text-white p-4 sm:p-8 flex items-center justify-center">
      <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#FFD369]">Add a New Event</h1>
        
        <form onSubmit={SubmitForm}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Title Field - Spans both columns */}
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-bold mb-2 uppercase tracking-wider">Event Title</label>
              <input 
              onChange={handleChange}
                type="text" 
                name="title"
                id="title" 
                className="w-full p-3 capitalize rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                placeholder="e.g., Tech Conference 2026"
                required
              />
            </div>

            {/* Description Field - Spans both columns */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-bold mb-2 uppercase tracking-wider">Description</label>
              <textarea
              onChange={handleChange}
                name="description"
                id="description"
                rows="4"
                className="w-full h-[300px] p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                placeholder="A brief summary of the event, not more than 15 words..."
                required
              ></textarea>
            </div>

            {/* Location Field - Left column */}
            <div>
              <label htmlFor="location" className="block text-sm font-bold mb-2 uppercase tracking-wider">Location</label>
              <select 
              onChange={handleChange}
                name="location"
                id="location" 
                className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                required
              >
                <option value="" disabled selected >--Select a location--</option>
                <option value="Legacy Hall">Legacy Hall</option>
                <option value="Student Recreation Center">Student Recreation Center</option>
                <option value="University Sports Complex">University Sports Complex</option>
                <option value="Senate Building, Room 201">Senate Building, Room 201</option>
                <option value="Fine Arts Auditorium">Fine Arts Auditorium</option>
                <option value="Legacy Hall">Legacy Hall</option>
                <option value="Multipurpose Hall">Multipurpose Hall</option>
                <option value="Engineering Faculty Building">Engineering Faculty Building</option>
              </select>
            </div>

            {/* Date Field - Right column */}
            <div>
              <label htmlFor="date" className="block text-sm font-bold mb-2 uppercase tracking-wider">Date</label>
              <input 
              onChange={handleChange}
                type="date" 
                name="date"
                id="date" 
                className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                required
              />
            </div>

            {/* Image Upload Field - Spans both columns */}
            <div className="md:col-span-2">
              <label htmlFor="eventImage" className="block text-sm font-bold mb-2 uppercase tracking-wider">Event Image</label>
              <input
              onChange={handleChange}
                type="file"
                name="eventImage"
                id="eventImage"
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#FFD369] file:text-[#222831] hover:file:bg-yellow-500 cursor-pointer"
                accept="image/png, image/jpeg, image/jpg"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="mt-8 w-full bg-[#e4a238] text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 cursor-pointer transition-transform transform hover:scale-[1.02] duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;