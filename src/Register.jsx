import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const events = [{
        id: 1,
        title: "Debate Championship 2025",
        description: "Annual university-wide debate tournament.",
        location: "Legacy Hall",
        date: "24-11-2025",
        time: "10:00 AM",
        ticket: 3000,
        imageUrl: "debate.jpg"
    },
    {
        id: 2,
        title: "Tech Innovation Week 2025",
        description: "A week of tech talks, workshops, and hackathons.",
        location: "School Multipurpose Hall",
        date: "12-01-2026",
        time: "09:00 AM",
        ticket: 2000,
        imageUrl: "tech.jpg"

    },
    {
        id: 3,
        title: "Student Leadership Summit",
        description: "Empowering the next generation of student leaders.",
        location: "Student Recreation Center",
        date: "02-12-2025",
        time: "11:00 AM",
        ticket: "",
        imageUrl: "student.jpg"
    },

    {
        id: 4,
        title: "Trade fair",
        description: " A student event showcasing creativity and innnovation",
        location: "University Sports Complex",
        date: "15-05-2026",
        time: "10:30 AM",
        ticket: "",
        imageUrl: "trade_fair.jpg"
    },
    
    {
        id: 5,
        title: "Student Council Meeting",
        description: "Monthly meeting for all student council representatives.",
        location: "Senate Building, Room 201",
        date: "05-06-2026",
        time: "02:00 PM",
        ticket: "",
        imageUrl: "meeting.jpg"
    },

    {
        id: 6,
        title: "Annual Sports Gala",
        description: "A day of fun, sports, and team spirit.",
        location: "University Sports Complex",
        date: "10-05-2026",
        time: "08:00 AM",
        ticket: 1500, 
        imageUrl: "sports.jpg"
    },

    {
        id: 7,
        title: "Art & Culture Exhibition",
        description: "Showcasing student talent in art, music, and drama.",
        location: "Fine Arts Auditorium",
        date: "20-04-2026",
        time: "01:00 PM",
        ticket: 2000,
        imageUrl: "art.jpg"
    },

    {
        id: 8,
        title: "Career Fair 2026",
        description: "Connect with top employers and explore career opportunities.",
        location: "Multipurpose Hall",
        date: "15-11-2026",
        time: "09:30 AM",
        ticket: "",         
        imageUrl: "career.jpg"
    },

    {
        id: 9,
        title: "University Music Fest",
        description: "An evening of live music from student bands and local artists.",
        location: "Legacy Hall",
        date: "28-05-2026",
        time: "06:00 PM",
        ticket: 2500,
        imageUrl: "music.jpg"
    },

    {
        id: 10,
        title: "Science & Technology Expo",
        description: "Discover groundbreaking projects from our science and engineering students.",
        location: "Engineering Faculty Building",
        date: "03-03-2026",
        time: "10:00 AM",
        ticket: "",
        imageUrl: "science.jpg"
    },
    ]

    let navigate = useNavigate();


    let Register =(event)=>{
        navigate('/form', { state: { selectedEvent: event } })
    }

    return (
        <>
<div className='min-h-screen bg-[#222831] py-12 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold text-white text-center mb-12 lg:mb-16'>Upcoming Events</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
            events.map((event, index) =>
            
            (
                <div key={index} className='bg-[#393E46] rounded-xl shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105 duration-300 overflow-hidden'>

                    <img className='w-full h-48 object-cover bg-center' src={event.imageUrl} alt={event.title} />

                    <div className='p-6 flex flex-col grow'>

                        <div className='grow'>

                            <h2 className='text-2xl font-bold text-white mb-2'>{event.title}</h2>

                            <p className='text-gray-300 mb-4'>{event.description}</p>
                            <div className='text-gray-400 space-y-2'>

                                <p><span className='font-semibold'>Location:</span> {event.location}</p>

                                <p><span className='font-semibold'>Date:</span> {event.date}</p>

                                <p><span className='font-semibold'>Time:</span> {event.time}</p>

                                <p><span className='font-semibold'>Ticket:</span> {event.ticket ? `₦${event.ticket}` : 'Free'}</p>
                            </div>
                        </div>

                        <button onClick={() => Register(event)} className='mt-6 w-full px-6 cursor-pointer py-3 bg-[#222831] text-white font-bold rounded-lg hover:bg-gray-900 transition-colors duration-300'>Register Now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
        </>
    )
}

export default Register