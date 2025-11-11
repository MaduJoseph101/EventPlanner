import React from 'react';
import { Link } from 'react-router-dom';

function PresidentsApproval() {
  return (
    <main className='relative h-screen bg-cover bg-center bg-[url(homebackground.jpg)] bg-blend-darken bg-[#00000077] flex items-center justify-center p-4'>
      <div className='absolute inset-0 w-full h-full backdrop-blur-[3px]'></div>

      <div className='relative z-10 text-center max-w-3xl'>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>
          Manage Events and Approvals with Ease.
        </h1>
        

        <div className='mt-16 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6'>
          <Link to="/addEvent">
            <button className='w-full sm:w-auto cursor-pointer px-8 py-3 bg-[#e4a238] text-[#222831] font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-[1.03] duration-300 shadow-lg hover:shadow-xl'>
              Add an Event
            </button>
          </Link>

          <Link to="/approval">
            <button className='w-full sm:w-auto cursor-pointer px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#222831] transition-all transform hover:scale-[1.03] duration-300 shadow-lg'>
              View Event Approvals
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PresidentsApproval;