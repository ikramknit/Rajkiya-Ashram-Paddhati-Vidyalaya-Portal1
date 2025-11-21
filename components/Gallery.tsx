import React from 'react';

export const Gallery: React.FC = () => {
  const activities = [
    { title: "Morning Yoga", desc: "Daily spiritual and physical wellness", img: "https://picsum.photos/400/300?random=20" },
    { title: "Tree Plantation", desc: "Environmental awareness drives", img: "https://picsum.photos/400/300?random=21" },
    { title: "Scouts", desc: "Character building activities", img: "https://picsum.photos/400/300?random=22" },
    { title: "Cleanliness Drive", desc: "Swachhata Abhiyan participation", img: "https://picsum.photos/400/300?random=23" },
    { title: "Cultural Programs", desc: "Celebrating festivals and Jayantis", img: "https://picsum.photos/400/300?random=24" },
    { title: "Health Camps", desc: "Regular medical checkups", img: "https://picsum.photos/400/300?random=25" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Life & Activities</h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};