const WhyChooseUs = () => {
  return (
    <div id="why-briefly" className="bg-martinique  text-white p-8 flex items-center justify-center">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="text-justify mx-20">
          <h2 className="text-3xl font-bold mb-4 italic">
            Why Choose <span className="text-purple-400">briefly</span>?
          </h2>
          <p className="text-gray-300 mb-6">
            Our URL shortening service is built on a robust and scalable infrastructure, ensuring your links are always accessible, no matter the volume of traffic. We prioritize uptime and reliability, so your shortened URLs are available when you need them most. Speed is crucial in the digital world, and our service delivers. Experience instantaneous URL redirection, ensuring your users are never left waiting. Our optimized backend processes millions of requests seamlessly, guaranteeing a smooth user experience. Integrate our powerful URL shortening capabilities directly into your applications with our comprehensive API. Automate link creation, management, and analytics to streamline your workflow and enhance your digital strategy.
          </p>
          <button className="bg-violet-600 text-white px-6 py-2 rounded">
            Learn More About Us
          </button>
        </div>
        <div className="flex items-center justify-center w-auto">
          <img
            src="../assets/tumblr_ltu9giEonl1r5qrimo1_500.gif"
            alt="Why Choose Us"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
