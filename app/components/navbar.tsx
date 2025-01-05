"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div>
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/image/footer.png"
                width={150}
                height={100}
                alt="logo"
              />
            </a>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:0701936432"
              className="text-sm text-gray-500 dark:text-white hover:underline flex items-center"
            >
              <FiPhone className="mr-1" />
            </a>

            <a
              href="mailto:ddavidnzioka8@gmail.com"
              className="text-sm text-gray-500 dark:text-white hover:underline flex items-center"
            >
              <MdOutlineEmail className="mr-1" />
            </a>

            <button
              onClick={toggleSidebar}
              className="md:hidden block text-2xl text-gray-600 dark:text-white"
            >
              {sidebarOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-50 ">
        <div className="max-w-screen-xl px-4 py-3 ">
          <div className="hidden md:flex justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/company"
                  className="text-gray-900 dark:text-white hover:underline "
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/service"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/pricing"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white z-50">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-lg">Menu</h2>
            <button
              onClick={closeSidebar}
              className="text-2xl text-gray-300 hover:text-white"
            >
              <FiX />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-white hover:text-gray-300"
                  onClick={closeSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/company"
                  className="block text-white hover:text-gray-300"
                  onClick={closeSidebar}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/service"
                  className="block text-white hover:text-gray-300"
                  onClick={closeSidebar}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/pricing"
                  className="block text-white hover:text-gray-300"
                  onClick={closeSidebar}
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
