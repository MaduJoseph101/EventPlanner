import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeClassName = "border-b-2 border-[#e4a238] transition-all duration-[0.1s] pb-1";
  const inactiveClassName = "hover:text-[#393E46] transition-all duration-[0.1s]";

  const getNavLinkClass = ({ isActive }) => isActive ? `${activeClassName}` : `${inactiveClassName}`;

  return (
        <>
        <header className='sticky top-0 flex h-[9vh] md:h-[13vh]  uppercase bg-[#ffffff] justify-between items-center px-6 md:px-10 text-[#222831] font-bold z-30'>
            <h1 className=' text-2xl select-none'>BITXBASE</h1>

             {/* DESKTOP NAVIGATION */}
            <nav className='hidden md:flex items-center'>
                <ol className='flex gap-8 text-[18px] cursor-pointer'>
                    <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/about" className={getNavLinkClass}>About</NavLink></li>
                    <li><NavLink to="/student" className={({ isActive }) => (isActive || location.pathname === '/register') ? activeClassName : inactiveClassName}>Register</NavLink></li>
                    <li><NavLink to="/admin" className={({ isActive }) => (isActive || location.pathname === '/addEvent' || location.pathname === '/presidentsapproval' || location.pathname === '/approval') ? activeClassName : inactiveClassName}>Add Event</NavLink></li>
                </ol>
            </nav>

            {/* MOBILE MENU BUTTON*/}
            <div className='md:hidden z-40'>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer active:text-[#e4a238] transition-all duration-600text-[#222831]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

        {/* OVERLAY */}
        {isMenuOpen && (
            <div className="md:hidden fixed inset-0 duration-300 ease-in-out bg-[#0000003e] z-20" onClick={() => setIsMenuOpen(false)}></div>
        )}

         {/* MOBILE NAV MENU */}
        <nav className={`fixed top-0 right-0 h-full w-[270px] max-w-sm bg-[#fffffff3] backdrop-blur-2xl z-30 transform transition-transform border-l-2 border-[#e4a238a8] duration-700 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="absolute top-5 right-5 text-[#222831] active:text-[#e4a238] ">

                {/* MOBILE MENU CLOSE BUTTON */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <ol className='flex flex-col items-center justify-center h-full gap-8 uppercase text-[#222831] font-bold'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? activeClassName : inactiveClassName} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>

                <li><NavLink to="/about" className={({ isActive  }) => isActive ? activeClassName : inactiveClassName} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>

                <li><NavLink to="/student" className={({ isActive }) => (isActive || location.pathname === '/form' || location.pathname === '/register' ) ? activeClassName : inactiveClassName} onClick={() => setIsMenuOpen(false)}>Register</NavLink></li>
                
                <li><NavLink to="/admin" className={({ isActive }) => (isActive || location.pathname === '/addEvent' || location.pathname === '/presidentsapproval' || location.pathname === '/approval') ? activeClassName : inactiveClassName} onClick={() => setIsMenuOpen(false)}>Add Event</NavLink></li>
            </ol>
        </nav>

    </>
  )
}

export default Header