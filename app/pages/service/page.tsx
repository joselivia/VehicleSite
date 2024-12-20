import Customer from "@/app/components/customer";
import MyWork from "@/app/components/mywork";
import Image from "next/image";

export default function Services() {
  return (
    <section
      className="bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/image/serv.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-10 bg-gray-700 bg-opacity-50">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
          Our Services
        </h2>
      </div>
      <MyWork  />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-10">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/bg.png"
            alt="Service"
            width={200}
            height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Car Keys Duplication
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/bg.png"
            alt="Service"
            width={200}
            height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Car Unlocking
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          
          </div>
          
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/bg.png"
            alt="Service"
            width={200}
          height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tracking Service
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
                     </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl text-center  lg:py-10 bg-gray-700 bg-opacity-50">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
          Our Satisfied Customers
        </h2>
      </div>
      <Customer/>
    </section>
  );
}
