import React from 'react'

const contact = () => {
  return (
    <div>
    
      <main className="max-w-6xl mx-auto px-6 mt-8">
        {/* Tagline Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 italic">We are available 24/7, we work round the clock.</p>
          <p className="text-gray-500 text-sm mt-1">Your Request, We Answer</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-8">
            <p className="leading-relaxed text-gray-600">
              Our friendly, knowledgeable staff are here to answer your questions, 
              plan your move, and make sure everything runs smoothly. Whether 
              you're relocating your home or business, we'll guide you through 
              every step and tailor our services to your needs.
            </p>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Exceptional Service Quality:</h3>
              <p className="text-gray-600">
                We combine professional handling, punctual arrivals, and flexible 
                options to deliver smooth, stress-free moves every time.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Outstanding Customer Care:</h3>
              <p className="text-gray-600">
                Our responsive, friendly team listens, advises, and keeps you 
                updated at every stage to ensure your complete satisfaction.
              </p>
            </div>
          </div>

          {/* Right Column: 24/7 Graphic */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl">
              {/* Spinning Arrow SVG Overlay */}
              <svg className="absolute w-full h-full -rotate-12 scale-110" viewBox="0 0 100 100">
                <path 
                  d="M 50,5 A 45,45 0 1,1 15,18" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                <polygon points="15,10 10,25 25,20" fill="white" />
              </svg>
              
              <div className="text-center z-10">
                <span className="block text-8xl md:text-9xl font-black leading-none">24/7</span>
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl md:text-2xl font-light tracking-widest uppercase">Hours</span>
                </div>
                <span className="block text-4xl md:text-5xl font-bold tracking-tighter mt-2 uppercase">Service</span>
              </div>
              
              {/* Bottom shadow effect */}
              <div className="absolute -bottom-8 w-3/4 h-4 bg-gray-200 rounded-[100%] blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default contact