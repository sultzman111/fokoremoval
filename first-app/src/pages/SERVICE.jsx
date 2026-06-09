import React from 'react';

const Service = () => {
  const services = [
    {
      title: "House Removals",
      description: "Trusted experts in home and office furniture collection and timely delivery.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500", // Replace with your local assets
    },
    {
      title: "Office Relocation",
      description: "Seamless moves that minimize downtime and keep your business running smoothly.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Man & Van Services",
      description: "Flexible transport solutions for small or large moves at short notice.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Furniture and Delivery",
      description: "Reliable pick-up and drop-off of furniture, handled with care and efficiency.",
      image: "https://images.unsplash.com/photo-1538356111083-d23bc636c916?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Same day Or Booked",
      description: "Urgent or planned moves delivered on time, every time.",
      image: "https://images.unsplash.com/photo-1506784919140-29a0534e8811?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Local & National",
      description: "Wherever you're headed in the UK, we're ready to get you there.",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              What we offer at <br />
              <span className="text-blue-600 font-sans font-bold">Fokoremovals</span>
            </h2>
            <p className="text-slate-400 mt-6 text-lg">
              Trusted experts in home and office relocations, <br />
              furniture collection and timely delivery
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="text-slate-400 max-w-xs md:ml-auto">
              More than 100 Homes, offices, companies have used our services during the years.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)] transition-all duration-300 border border-slate-50"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;