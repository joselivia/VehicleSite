'use client'
import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    title: 'Key Duplication',
    description: 'We provide accurate and fast key duplication services for car locks.',
    image: '/image/dupl.png',
  },
  {
    title: 'Car Unlocking',
    description: 'Locked out of your car? Our skilled technicians will safely unlock your car without damage.',
    image: '/image/unlock.png',
  },
  {
    title: 'Tracking',
    description: 'Our advanced tracking solutions allow you to monitor the location of your vehicle at all times.',
    image: '/image/track.png',
  },
  {
    title: 'General Wiring',
    description: 'We specialize in all car wiring solutions, ensuring your vehicle’s electrical systems run smoothly.',
    image: '/image/general.png',
  },
];

export default function FeatureTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
 
   
    <div className="bg-fixed py-10 px-8 bg-gray-100 bg-center bg-no-repeat bg-cover"  style={{
      backgroundImage: "url('/image/bg1.png')",
      backgroundBlendMode: "multiply",
    }}>
      <div className="w-full mx-auto">
      <div className="px-4 mx-auto text-center lg:py-10 bg-gray-700 bg-opacity-50">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
      Be the First to Unlock Our Services
      </h2>
      </div>

              <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`py-2 px-4 border-b-2 font-semibold ${
                selectedTab === index
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-white-600 '
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>


        <div className="p-6 bg-gray-200 bg-opacity-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold dark:text-blue-900 mb-4">{features[selectedTab].title}</h3>
          <p className="text-gray-700 mb-6">{features[selectedTab].description}</p>
          <Image
            className="w-full h-64 object-contain"
            src={features[selectedTab].image}
            alt={features[selectedTab].title}
            width={300}
                height={300}
          />
        </div>
      </div>
    </div>
  );
}
