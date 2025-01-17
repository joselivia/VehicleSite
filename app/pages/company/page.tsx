"use client";

import React from "react";

export default function CompanyPage() {
  return (
    <section
      className="bg-fixed bg-center bg-no-repeat bg-cover py-10 px-5 bg-gray-500 flex flex-col items-center"
      style={{
        backgroundImage: "url('/image/anana.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="px-4 mx-auto w-full text-center lg:py-10 bg-gray-700 bg-opacity-50 mb-4">
        <h2 className="text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
          Our Company
        </h2>
      </div>

      <div className="w-full bg-gray-400 bg-opacity-50 shadow-md rounded-lg p-3">
        <h1 className="text-4xl font-bold text-center dark:text-white mb-6">
          Welcome to Davetech
        </h1>
        <p className="text-lg leading-relaxed dark:text-white mb-4">
          At Davetech, we specialize in key duplication, cutting, car unlocking,
          vehicle tracking, and general wiring services. With years of
          experience and a commitment to customer satisfaction, we provide
          top-notch services to ensure your security and convenience.
        </p>
        <p className="text-lg leading-relaxed dark:text-white mb-4">
          Whether you need a replacement key, help with unlocking your car, or
          advanced vehicle tracking systems, Davetech is here to serve. Our team
          of skilled technicians is equipped to handle all your automotive and
          security needs with precision and expertise.
        </p>
        <p className="text-lg leading-relaxed dark:text-white">
          We pride ourselves on offering fast, reliable, and affordable
          solutions for individuals and businesses alike. From key cutting to
          complex vehicle wiring systems, we have got you covered.
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full bg-gray-700 bg-opacity-50 shadow-md rounded-lg mt-10 p-8">
        <h2 className="text-3xl font-bold text-center dark:text-white-800 mb-6">
          Our Services
        </h2>
        <div className="flex justify-center">
          <ul className="list-disc list-inside text-lg dark:text-white leading-relaxed text-left">
            <li>Key Duplication and Cutting</li>
            <li>Car Unlocking</li>
            <li>Vehicle Tracking Systems</li>
            <li>General Wiring and Electrical Repair</li>
            <li>Alarm and Security System Installation</li>
          </ul>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full bg-gray-700 bg-opacity-50 shadow-md rounded-lg mt-10 p-8">
        <h2 className="text-3xl font-bold text-center dark:text-white-800 mb-6">
          Location
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="text-lg leading-relaxed dark:text-white  flex flex-col justify-center">
            <p>
              You can find Davetech at<strong> Ananas opposite Sarit Center Parking</strong>. We serve
              clients across the country and are available for both in-shop and
              on-site services. Get in touch with us today for all your key and
              automotive wiring needs in Our Main Office, Westlands, Nairobi.
            </p>
          </div>
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8513037433404!2d36.8012968732139!3d-1.261498698726496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17ec40b697a1%3A0xbed94f6e5c273614!2sAnanas%20Mall%20Westlands.!5e0!3m2!1sen!2ske!4v1728624512023!5m2!1sen!2ske"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-700 bg-opacity-50 shadow-md rounded-lg mt-10 p-8">
        <h2 className="text-3xl font-bold text-center dark:text-white-800 mb-6">
          Get In Touch
        </h2>
        <p className="text-lg leading-relaxed dark:text-white mb-4 text-center">
          Have any questions or need our services? Contact Davetech today!
        </p>
        <ul className="text-lg leading-relaxed text-gray-700 text-center">
          <p className="text-lg leading-relaxed dark:text-blue-400">
            To reach Us,at the right corner of your screen we have our
            constacts.
          </p>
        </ul>
      </div>
      <div className="py-8 px-4 mx-auto text-center lg:py-16 z-10 relative">
        <a
          href="/pages/new"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            New
          </span>
          <span className="text-sm font-medium">
            DaveTech have new components! See what is new ?
          </span>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s potential Technology
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Here at Dave-Tech we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth. we
          value our Customers.
        </p>
      </div>
    </section>
  );
}
