import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminAunthentication() {

let AdminDetails = {
    username: "Madu Joseph",
    password: 220502043,
};

let userName = useRef();
let password = useRef();


const [showPassword, setShowPassword] = useState(false);
const [notification, setNotification] = useState(
    { 
      show: false, 
      message: 'Invalid Username or Password.' 
    });

let navigate = useNavigate();

let handleSubmit =(e)=>{
    e.preventDefault(); 

  const enteredUserName = userName.current.value.trim();
  const enteredPassword = password.current.value.trim();

  if (enteredUserName.toLowerCase() === AdminDetails.username.toLowerCase() && enteredPassword === String(AdminDetails.password)) {
    navigate('/addEvent');
  }
    else {

        setNotification(
            { 
                show: true,
                message: 'Invalid Username or Password.'
             }
            );

        setTimeout(() => setNotification(
            { 
            show: false,
             message: 'Invalid Username or Password.' }), 3000);
    }

}

  return (
    <div className="min-h-screen bg-[#222831] text-white p-4 sm:p-8 flex items-center justify-center">
      <div className="bg-[#393E46] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">

        {/* NOTIFICATION POPUP */}
        <div
          className={`fixed top-5 right-5 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg z-50 transform transition-all duration-500 ease-in-out ${
            notification.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <p>{notification.message}</p>
        </div>


        <h1 className="text-3xl font-bold mb-8 text-center text-[#FFD369]">Admin Authentication</h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            
            {/* USERNAME */}
            <div>
              <label htmlFor="username" className="block text-sm font-bold mb-2  tracking-wider uppercase">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full capitalize p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300"
                placeholder="Enter your username"
                required
                ref={userName}
              />
            </div>

            
            {/* PASSWORD */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-3 rounded bg-[#222831] border border-gray-600 focus:border-[#FFD369] focus:ring focus:ring-[#FFD369] focus:ring-opacity-50 transition-colors duration-300 pr-10"
                  placeholder="Enter your password"
                  required
                  ref={password}
                />
                
                {/* SHOW/HIDE PASSWORD BUTTON */}
                <button
                  type="button"
                  onClick={
                    () => setShowPassword(!showPassword)
                  }
                  className="absolute hover:cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#FFD369] focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}

                </button>
              </div>
            </div>
          </div>


                  
          {/* SUBMIT BUTTON*/}
          <button
            type="submit"
            className="mt-8 w-full bg-[#e4a238] text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-500 cursor-pointer transition-transform transform hover:scale-[1.02] duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
    )
}

export default AdminAunthentication