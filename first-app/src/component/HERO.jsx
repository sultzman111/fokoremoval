import React from 'react';
// Import your van image here
import van from '../assets/van.jpg'; 

const Hero = () => {
  return (
    <div className="font-sans">
      
      {/* 1. TEXT HERO SECTION */}
      <section className="bg-white px-6 py-16 md:px-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tighter">
              What we offer at <br />
              <span className="text-blue-600">Fokoremovals</span>
            </h1>
            
            <p className="text-gray-500 text-xl max-w-md leading-relaxed">
              Trusted experts in home and office relocations, 
              furniture collection and timely delivery.
            </p>

            {/* LONG PHONE INPUT LINE */}
            <div className="w-full max-w-2xl pt-6">
              <label className="block text-gray-900 text-2xl font-semibold mb-3">
                Phone number
              </label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-2xl outline-none focus:border-blue-600 transition-all placeholder:text-gray-300"
              />
            </div>
          </div>
          
          <div className="lg:flex lg:justify-end">
            <p className="text-gray-400 text-base md:text-right max-w-[240px] leading-relaxed pt-4">
              More than 100 Homes, offices, companies have used our services during the years.
            </p>
          </div>
        </div>
      </section>

   

      {/* 3. SERVICE CARDS SECTION */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 h-[500px]">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="w-full h-2/3 object-cover" alt="Service" />
            <div className="p-8">
               <h3 className="text-2xl font-bold">House Removals</h3>
               <p className="text-gray-500 mt-2">Trusted experts in home furniture collection.</p>
            </div>
          </div>
          {/* ... Add other cards here ... */}
           <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 h-[500px]">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="w-full h-2/3 object-cover" alt="Service" />
            <div className="p-8">
               <h3 className="text-2xl font-bold">House Removals</h3>
               <p className="text-gray-500 mt-2">Trusted experts in home furniture collection.</p>
            </div>
          </div>
           <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 h-[500px]">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="w-full h-2/3 object-cover" alt="Service" />
            <div className="p-8">
               <h3 className="text-2xl font-bold">House Removals</h3>
               <p className="text-gray-500 mt-2">Trusted experts in home furniture collection.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-12">
          <a href="#" className="text-blue-600 font-bold flex items-center gap-2">
            See All What We Offer →
          </a>
        </div>
      </section>
   {/* 2. THE VAN IMAGE (Immediately after Hero) */}
      <section className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img 
          src={van} 
          alt="Fokoremovals Van" 
          className="w-full h-full object-cover"
        />
      </section>

      <div> <section className="bg-[#0055FF] text-white px-8 py-24 md:px-20 mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight">About Us</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <p className="text-white/95 text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
              At Foko Removals, we're all about making your move smooth and stress-free. 
              Whether it's a single item, full house, or office relocation — 
              we've got you covered with a friendly team, fair prices, and full 
              insurance for peace of mind.
            </p>
            
            <span className="text-white/80 italic font-medium text-lg whitespace-nowrap border-b border-white/30 pb-2">
              Reliable, Fast & Timely
            </span>
          </div>
        </div>
      </section></div>
     
    </div>
  );
};

export default Hero;