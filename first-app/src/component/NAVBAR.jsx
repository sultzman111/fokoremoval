import React from 'react'
import { Link } from 'react-router-dom'

const NAVBAR = () => {
  return (
    /* 1. Added the background image here. Replace the URL with your local image path if needed */
    <div className="min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')] bg-cover bg-center bg-no-repeat relative">
      
      {/* 2. Added a dark overlay so the white text is easy to read */}
      <div className="absolute inset-0 bg-blue-900/40"></div>

      {/* NAVBAR: Centered and floating */}
      <div className="relative z-50 flex justify-center pt-8">
        <div className='flex flex-row items-center gap-2 p-2 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg'>
          <div className='px-6 text-2xl font-bold tracking-tight text-blue-500 font-sans'> FOKOREMOVAL </div>
          <div className='text-lg font-mono px-4 text-blue-500'> <Link to="/">Home</Link> </div>
          <div className='text-lg font-mono px-4 text-gray-700 hover:text-blue-500'> <Link to="/contact">Contact</Link></div>
          <div className='text-lg font-mono px-4 text-gray-700 hover:text-blue-500'> <Link to="/Service">Service</Link></div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <section className='relative z-10 flex flex-row items-start justify-center mt-32 px-10 gap-20'>
        
        {/* Left Side Info */}
        <div className='max-w-xl'>
          <div className='text-sm font-bold text-blue-200 mb-2 uppercase tracking-widest'> Trusted by 100+ </div>
          <div className='font-bold text-white text-6xl leading-tight mb-2'>Foko Removals - Your</div>
          <div className='font-bold text-blue-400 text-6xl mb-8 italic'> Move, Our Mission</div>
          
          <div className='text-gray-100 font-medium text-lg mb-10 leading-relaxed'>
            Reliable man & van and removal services. <br />
            Based in Loughborough, serving across the UK.
          </div>

          <div className="space-y-6">
            <div className='flex items-center gap-4'> 
              <span className="text-2xl">📞</span> 
              <span className='font-bold text-white text-2xl'>07920021955</span>
            </div>
            <div className='flex items-center gap-4'> 
              <span className="text-2xl">✉️</span> 
              <span className='font-bold text-white text-2xl'>info@fokoremovals.co.uk</span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className='bg-white/95 backdrop-blur-sm p-10 rounded-[40px] shadow-2xl w-[450px]'>
          <div className='font-bold text-3xl text-slate-800 mb-8 text-center'>Client Contact Form</div>
          
          <form className="space-y-4">
            <div>
              <div className='font-bold text-slate-700 mb-1 ml-1'>Name</div>
              <input type="text" className='w-full border-b-2 border-gray-200 p-2 outline-none focus:border-blue-500 bg-transparent' placeholder='Enter your name'/>
            </div>
            
            <div>
              <div className='font-bold text-slate-700 mb-1 ml-1'>Email</div>
              <input type="text" className='w-full border-b-2 border-gray-200 p-2 outline-none focus:border-blue-500 bg-transparent' placeholder='Enter your Email'/>
            </div>

            <div>
              <div className='font-bold text-slate-700 mb-1 ml-1'>Phone number</div>
              <input type="text" className='w-full border-b-2 border-gray-200 p-2 outline-none focus:border-blue-500 bg-transparent' placeholder='Enter your phone number'/>
            </div>

            <div>
              <div className='font-bold text-slate-700 mb-1 ml-1'>Address</div>
              <input type="text" className='w-full border-b-2 border-gray-200 p-2 outline-none focus:border-blue-500 bg-transparent' placeholder='Enter your Address'/>
            </div>

            <div>
              <div className='font-bold text-slate-700 mb-1 ml-1'>Message</div>
              <textarea rows="1" className='w-full border-b-2 border-gray-200 p-2 outline-none focus:border-blue-500 bg-transparent resize-none' placeholder='Type your Message here.... ' />
            </div>

            <button className='w-full py-4 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition duration-300 mt-6 shadow-lg shadow-blue-100'>
              Submit Request
            </button>
          </form>
        </div>

      </section>
    </div>
  )
}

export default NAVBAR