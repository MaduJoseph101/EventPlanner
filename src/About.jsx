import React from 'react'

function About() {
  const testimonials = [
    {
      quote: "BITXBASE transformed our annual tech conference. The planning was seamless, and the execution was flawless. Our attendees were blown away!",
      name: "Timothy Imhanko",
      title: "Lead Organizer, TechCon 2025",
      avatar: "avatar1.jpg"
    },
    {
      quote: "The attention to detail is just incredible. From the venue to the catering, every aspect of our student leadership summit was perfect.",
      name: "Anthony Ibazebo",
      title: "Student Council President",
      avatar: "avatar2.jpg"
    },
    {
      quote: "An absolutely unforgettable experience. The team is professional, creative, and truly dedicated. Highly recommended for any university event.",
      name: "Anastasia John",
      title: "Arts & Culture Fest Coordinator",
      avatar: "avatar3.jpg"
    }
  ];

  const galleryImages = [
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-3.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg',
  ];

  return (
    <>
      <div className="bg-[#222831] text-white">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-[#393E46] bg-opacity-50" data-aos="fade-up">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFD369] mb-4">About BITXBASE</h1>
            <p className="text-lg md:text-xl text-balance text-gray-300 max-w-3xl mx-auto">
              We are passionate about creating memorable and impactful events for the university community. Our mission is to provide a seamless platform for event creation, registration, and management, fostering a vibrant campus life.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD369]">What Our Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {
              testimonials.map((testimonial, index) =>
                 (<div key={index} className="bg-[#393E46] p-8 rounded-xl shadow-lg shadow-black/30 flex flex-col items-center text-center">

                  <img src={testimonial.avatar} alt={testimonial.name} className="w-32 h-32 rounded-full mb-6 border-2 object-cover object-center border-[#e4a238]" />
                  <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-lg text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-[#393E46] bg-opacity-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFD369]">Glimpses of Our Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {

              galleryImages.map((image, index) =>
                
                (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={image} 
                    alt={`Event gallery image ${index + 1}`} 
                    
                    className="w-full h-full object-cover hover:cursor-pointer object-center transform hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#222831] border-t border-gray-700 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-[#FFD369] mb-4">BITXBASE</h3>
                <p className="text-gray-400">Your partner in creating unforgettable university events.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-[#e4a238]">Home</a></li>
                  <li><a href="/register" className="text-gray-400 hover:text-[#e4a238]">Register for an Event</a></li>
                  <li><a href="/admin" className="text-gray-400 hover:text-[#e4a238]">Create Event</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex justify-center md:justify-start space-x-4">

                  <a href="https://www.linkedin.com/in/madu-joseph-5b804a321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="text-gray-400 hover:text-[#e4a238]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>

                  <a href="https://github.com/MaduJoseph101" aria-label="GitHub" className="text-gray-400 hover:text-[#e4a238]">

                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  <a href="https://www.instagram.com/madujoseph101?igsh=MXVtcTRyb2l5bXF1bA==" aria-label="Instagram" className="text-gray-400 hover:text-[#e4a238]">

                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                </div>

              </div>

            </div>

            <div className="mt-12 border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-500">&copy; {new Date().getFullYear()} BITXBASE. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default About