import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='mb-0 bg-blue-800 ' >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get a Free Quote Today</h2>
          <p className="text-blue-100 opacity-90">Ready to move?</p>
        </div>

        {/* The Card */}
        <div className="bg-white w-full rounded-[45px] shadow-2xl flex flex-col md:flex-row p-8 md:p-16 gap-12">
          
          {/* Left: Contact Info */}
          <div className="flex-1 space-y-10 flex flex-col justify-center">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5" alt="WA" />
                <span className="font-bold text-slate-800 text-xl">07920021955</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="font-bold text-slate-800 text-xl">Info@fokoremovals.co.uk</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <p className="font-bold text-slate-800 text-xl leading-tight">
                29 Middle Avenue,<br />
                Loughborough<br />
                LE11 5HZ
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 bg-[#f8faff] rounded-[40px] p-8 md:p-10 border border-blue-50 shadow-inner">
            <h3 className="text-2xl font-bold text-center mb-10 text-slate-900">Client Contact Form</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1">Name</label>
                <input type="text" placeholder="Enter your name" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-blue-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-blue-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-blue-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1">Address</label>
                <input type="text" placeholder="Enter your address" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-blue-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1">Message</label>
                <textarea placeholder="Type your message..." rows="1" className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-blue-500 placeholder:text-gray-300 resize-none"></textarea>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-200 mt-4 transition-all active:scale-95">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-blue-100 text-[10px] tracking-widest opacity-70">
          © 2025 FOKOREMOVALS TECHNOLOGY. ALL RIGHTS RESERVED.
        </div>
      </div>
  </div>
  )
}

export default Footer