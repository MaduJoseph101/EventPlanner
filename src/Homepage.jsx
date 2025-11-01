import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
        <main className='relative  h-[100dvh] bg-cover bg-center bg-[url(homebackground.jpg)]   bg-blend-darken bg-[#00000077] flex items-center justify-center p-4'>
            <div className='absolute inset-0 w-full h-full backdrop-blur-[3px]'></div>

            <div className='relative z-10 text-center max-w-3xl'>
                <h1 className='text-5xl md:text-7xl font-bold text-white'>
                    Plan Your Perfect Event
                </h1>
                <p className='mt-4 text-lg md:text-xl text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'>
                    Your one-stop solution for seamless event planning and management.
                </p>
                
                <div className='mt-16 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6'>
                    <Link to="/addEvent">
                        <button className='w-full sm:w-auto cursor-pointer px-8 py-3 bg-[#e4a238] text-[#222831] font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-[1.03] duration-300 shadow-lg hover:shadow-xl'>
                            Create an Event
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className='w-full sm:w-auto cursor-pointer px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#222831] transition-all transform hover:scale-[1.03] duration-300 shadow-lg'>
                            Register for an Event
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    </>
  )
}

export default Homepage