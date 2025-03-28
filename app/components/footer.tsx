import Image from "next/image";
import React from "react";
export default function Footbar() {
     const currentYear = new Date().getFullYear(); 
    return(
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full  p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                  <Image src="/image/footer.png" width={200} height={300} className="h-25 me-3" alt="footer" />

              </div>
              
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <p className="hover:underline">Key Programming</p>
                      </li>
                      <li>
                          <p className="hover:underline">Alarms</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Tiktok</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <p className="hover:underline">Privacy Policy</p>
                      </li>
                      <li>
                          <p className="hover:underline">Terms &amp; Conditions</p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-center items-cente">
          <span className="text-sm text-gray-500 dark:text-gray-400">© 2020-{currentYear} Dave-Tech™. All Rights Reserved.
          </span>
          </div>
    </div>
</footer>
    )}