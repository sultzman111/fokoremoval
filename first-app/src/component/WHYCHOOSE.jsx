import React from 'react'

const WHYCHOOSE = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-20 font-sans">
<div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Why choose <br />
            <span className="text-blue-600">Fokoremovals</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Your trusted partner for stress-free moves across the UK
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Insured */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center mb-8">
              <img src="/truck-illustration.png" alt="Truck" className="w-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Fully Insured Goods in Transit</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enjoy complete peace of mind knowing your items are protected throughout the move.
            </p>
          </div>

          {/* Card 2: Professional (Blue tint) */}
          <div className="bg-blue-50/50 rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center mb-8">
              <img src="/mover-character.png" alt="Mover" className="h-64 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Professional, Polite, and Punctual</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our experienced team delivers a courteous, timely, and hassle-free service every time.
            </p>
          </div>

          {/* Card 3: Stacked UI Elements */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center gap-4 py-6">
              {/* Top Stack */}
              <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-50 flex justify-between items-center transform -rotate-2 -translate-x-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                  <div>
                    <p className="text-[10px] font-bold">Office Relocations</p>
                    <p className="text-[8px] text-gray-400 text-left">Hathern</p>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">Premium</span>
              </div>
              
              {/* Bottom Stack */}
              <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-50 flex justify-between items-center transform translate-x-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                  <div>
                    <p className="text-[10px] font-bold text-left">Packing</p>
                    <p className="text-[8px] text-gray-400 text-left">Barrow upon Soar</p>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">Premium</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Affordable and Flexible Options</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Choose a plan that fits your schedule and budget without compromising on quality.
            </p>
          </div>

          {/* Card 4: Belongings */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
            <div className="flex-1 mb-8 overflow-hidden rounded-2xl">
              <img src="/boxes.jpg" alt="Boxes" className="w-full h-48 object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Your Belongings Handled with Care</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We treat your possessions as if they were our own, ensuring safe transport at every stage.
            </p>
          </div>

          {/* Card 5: Map */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col h-full">
            <div className="flex-1 mb-8 overflow-hidden rounded-2xl">
              <img src="/map.jpg" alt="Map" className="w-full h-48 object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Based in Loughborough, Operating UK-Wide</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Local expertise with national reach wherever you're moving, we've got you covered.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default WHYCHOOSE