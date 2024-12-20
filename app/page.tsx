import MessageForm from "./components/messageform";

export default function Home() {
  return (
    <section
      className="bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/image/bg1.png')", 
        backgroundBlendMode: "multiply",
      }}
    >      <div className="px-4 mx-auto max-w-screen-xl text-center py-10 bg-gray-700 bg-opacity-50">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We invest in the world’s vehicle technology
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at DaveTech we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          We pride ourselves on our customer service and attention to detail.
          Whether you need a new key programmed or a complex wiring job, we
          have the skills and experience to get the job done right. Contact us
          today to learn more about our services and how we can help you with
          your vehicle needs.
        </p>
   
      </div>
            <MessageForm/>
    </section>
  );
}

