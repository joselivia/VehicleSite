import Image from "next/image";

export default function NewItems() {
    return (
      <section
        className="bg-fixed bg-center bg-no-repeat bg-cover py-10 px-8"
        style={{
          backgroundImage: "url('/image/bg2.png')",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-10 bg-gray-700 bg-opacity-50 py-4">
          <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl text-white">
            New Products in the Market
          </h2>
        </div>
  
 
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-10">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="w-full h-50 md:h-60 object-contain"
              src="/image/bg1.png"
              alt="Product Image 1"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </div>
          </div>
  
          {/* Product 2 */}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="w-full h-50 md:h-60 object-contain"
              src="/image/bg2.png"
              alt="Product Image 2"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </div>
          </div>
  
          {/* Product 3 */}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="w-full h-50 md:h-60 object-contain"
              src="/image/bg.png"
              alt="Product Image 3"
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  