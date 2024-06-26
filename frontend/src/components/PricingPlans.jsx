const PricingPlans = () => {
  return (
    <div id="pricingplans" className="py-12 bg-martinique text-center text-white">
      <h2 className="text-4xl font-bold italic">Our Pricing Plans</h2>
      <p className="text-lg mt-4">Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, 50+ app integrations and support. Choose your plan below.</p>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-8">
        <div className="max-w-xs p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-110">
          <h3 className="font-bold text-xl">Free</h3>
          <p className="text-2xl mt-4">$0</p>
          <ul className="text-left mt-6 space-y-2 ">
            <li>Up to 50 bitly links / month</li>
            <li>Unlimited clicks</li>
            <li>Customizable back-halves</li>
            <li>Access to integrations</li>
            <li>Powerful link history and reporting</li>
          </ul>
          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Get Started</button>
        </div>
        <div className="max-w-xs p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-110">
          <h3 className="font-bold text-xl">Basic</h3>
          <p className="text-2xl mt-4">$20</p>
          <ul className="text-left mt-6 space-y-2">
            <li>Everything in Free</li>
            <li>Up to 2,000 branded links / month</li>
            <li>Create and share branded links</li>
            <li>Basic email support</li>
            <li>Redirect any link</li>
            <li>Bitly-branded QR Codes</li>
          </ul>
          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Get Started</button>
        </div>
        <div className="max-w-xs p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-110">
          <h3 className="font-bold text-xl">Premium</h3>
          <p className="text-2xl mt-4">$50</p>
          <ul className="text-left mt-6 space-y-2">
            <li>Everything in Basic</li>
            <li>Up to 5,000 branded links / month</li>
            <li>Mobile deep links</li>
            <li>UTM Builder</li>
            <li>QR Codes</li>
          </ul>
          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
