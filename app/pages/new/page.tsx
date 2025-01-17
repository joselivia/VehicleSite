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
      <div className="px-4 mx-auto text-center lg:py-10 bg-gray-700 bg-opacity-50 py-4">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl text-white">
          New Products in the Market
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-8">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/newunlock.png"
            alt="Image 1"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unlock Convenience with Remote Start & Key Duplication
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Elevate your driving experience with our easy-to-use remote start
              and seamless key duplication services. Enjoy the ultimate
              convenience right at your fingertips
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/newtrack.png"
            alt="Product Image 2"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Stay Secure with Advanced Car Tracking
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ensure peace of mind with our state-of-the-art car tracking
              solutions. Monitor your vehicle's location in real-time and keep
              it safe from theft with our reliable GPS tracking services.
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/realdata.png"
            alt="Image 3"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Drive Smart with Real-Time Vehicle Diagnostics
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Keep your car in top condition with our cutting-edge diagnostics.
              Identify issues early and enjoy hassle-free maintenance with
              real-time insights into your vehicle’s health.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/keydesign.png"
            alt="Image 4"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Personalize Your Ride with Custom Key Designs
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Add a touch of style to your driving experience with our unique
              key designs. Choose from a variety of custom options to make your
              car keys truly yours.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
