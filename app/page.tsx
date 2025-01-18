"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import MessageForm from "./components/messageform";

export default function Home() {
  const jobTitles = [
    { title: "Lost Car Key Replacement", description: "Lost key replacement for all cars involves creating new keys and reprogramming areplacement to match your vehicle's system." },
    { title: "Car Unlocking Srvice", description: "Expert in car unlocking services  providing quick access with no scratch or damage to the vehicle. Service provided to all type of cars." },
    { title: "Spare key Programming", description: "We provide services for spare keys ensuring seamless intergration with your Car security System." },
    { title: "Tracking And Telematics", description: "Gps car tracking provides real-time location update for your Car, enhancing high security." },
  ];

  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const currentJob = jobTitles[currentJobIndex];

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16702323519"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16702323519');
        `}
      </Script>

      <section
        className="bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/image/bg1.png')",
          backgroundBlendMode: "multiply",
        }}
      >
       
       <div className="text-center text-white py-10 bg-yellow-700 bg-opacity-70">
          <h2 className="text-5xl font-bold">{currentJob.title}</h2>
          <p className="text-lg mt-2 ">{currentJob.description}</p>
        </div>
        <div className="mx-auto  text-center py-3 bg-gray-700 bg-opacity-70">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s vehicle technology
          </h1>
          <p className="py-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            Here at DaveTech we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>

          <p className="mb-8 px-2 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We pride ourselves on our customer service and attention to detail.
            Whether you need a new key programmed or a complex wiring job, we
            have the skills and experience to get the job done right. Contact
            us today to learn more about our services and how we can help you
            with your vehicle needs.
          </p>
        </div>
        <MessageForm />
      </section>
    </div>
  );
}
