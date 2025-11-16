import React from 'react';
import { Link } from 'react-router-dom';

function BackButton({ to }) {
  return (
    <div className="absolute top-6 left-6 hidden md:block">
      <Link to={to}>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#393E46] text-white font-bold rounded-4xl hover:bg-[#4a505a] hover:font-bold hover:text-[#e4a238] hover:cursor-pointer hover:scale-[1.07]  transition-all duration-300 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default BackButton;