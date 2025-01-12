import MessageBanner from "@/app/components/banner";
import MyWork from "@/app/components/mywork";
import Image from "next/image";

export default function Services() {
  return (
    <section
      className="bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/image/bg2.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="p-4 mx-auto w-full text-center lg:py-10 bg-gray-700 bg-opacity-50">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
          Our Services
        </h2>
      </div>
      <MyWork />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/keyd.png"
            alt="Service"
            width={200}
            height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Car Keys Duplication
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Need a spare set of car keys? Look no further! Our car key
              duplication service is fast, reliable, and affordable. We can
              create duplicates for all car makes and models, ensuring you
              always have a backup key on hand. Whether you've lost your keys,
              need an extra set for a family member, or want a spare just in
              case, our skilled technicians are here to help. We use the latest
              technology to provide precise key cutting and programming, so your
              new keys will work perfectly every time. Don't get caught without
              a spare.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/carunlock.png"
            alt="Service"
            width={200}
            height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Car Unlocking
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Locked out of your car? Don't stress,we've got you covered!
              Whether it's lost keys, a malfunctioning lock, or you simply left
              your keys inside, our professional car unlocking service is here
              to help. Available 24/7, our team of skilled technicians can
              unlock any car model quickly and safely without damaging your
              vehicle. We pride ourselves on fast response times, affordable
              rates, and exceptional customer service. Don't let a car lockout
              ruin your day.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="w-full h-50 md:h-60 object-contain"
            src="/image/cartrack.png"
            alt="Service"
            width={200}
            height={200}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tracking Service
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Keep an eye on your car, no matter where you are! Our vehicle
              tracking service provides real-time location updates and
              comprehensive monitoring to ensure the safety and security of your
              vehicle. Whether you're concerned about theft, want to monitor
              your fleet, or need peace of mind for your personal car, our
              state-of-the-art GPS tracking technology has you covered. With
              easy-to-use software and 24/7 access, you can track your vehicle's
              movements, set geofencing alerts, and even monitor driving
              behavior.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4  mx-auto  text-center  lg:py-10 bg-gray-700 bg-opacity-50">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">
          Our Satisfied Customers
        </h2>
      </div>
      <MessageBanner />
    </section>
  );
}
