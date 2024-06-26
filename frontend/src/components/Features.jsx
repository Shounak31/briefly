import { useState, useEffect, useCallback } from 'react';

const cardData = [
  {
    title: 'Customizable Links',
    description: 'Tailor your URLs to fit your brand with customizable back-halves. Make your links memorable and recognizable by incorporating specific keywords or phrases.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  },
  {
    title: 'API Access',
    description: 'Integrate our URL shortening services into your own applications with comprehensive API access. Automate link generation and management with ease.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  },
  {
    title: 'Redirect Any Link',
    description: 'Redirect any existing link to a new destination without changing the original URL. Easily update and manage your links to keep your audience directed to the right content.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  },
  {
    title: 'Link Expiration',
    description: 'Set expiration dates for your links to ensure they are only accessible for a specific period. Ideal for time-sensitive promotions and campaigns.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  },
  {
    title: 'Detailed Analytics',
    description: 'Gain insights into your link performance with detailed analytics. Track clicks, geographic location, referral sources, and more to optimize your marketing strategies.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  },
  {
    title: 'Device Targeting',
    description: 'Optimize the user experience by redirecting users to different URLs based on their device type. Provide mobile-friendly links for smartphone users and full-featured links for desktop users.',
    svgPath: 'M13 16h-1v-4h-1m-1-4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1v4m-1-4h-1a2 2 0 01-2-2v-4a2 2 0 012-2h1V4m-1 4H8m4-2h2m0 0h2m-2 0h2m0 0V4m-2 2V4'
  }
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const rotateCards = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % cardData.length);
      setAnimating(false);
    }, 500); // Duration of the animation
  };

  const startRotation = useCallback(() => {
    const id = setInterval(rotateCards, 3000); // Rotate every 3 seconds
    setIntervalId(id);
  }, []);

  const stopRotation = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  useEffect(() => {
    startRotation();
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [startRotation]);

  const getVisibleCards = () => {
    return cardData
      .concat(cardData)
      .slice(currentIndex, currentIndex + 3);
  };

  return (
    <div id="features" className="py-12 bg-white text-center" onMouseEnter={stopRotation} onMouseLeave={startRotation}>
      <h2 className="text-2xl font-bold mb-8 italic">Features - What We Offer</h2>
      <div className={`flex justify-around items-center space-x-4 ${animating ? 'rotate' : ''}`}>
        {getVisibleCards().map((card, index) => (
          <div key={index} className={`max-w-xs p-4 ${index % 2 === 1 ? 'bg-lavender text-white' : 'bg-gray-100'} rounded-md shadow-2xl transform transition-transform duration-500`}>
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.svgPath} />
              </svg>
            </div>
            <h3 className="font-bold text-xl">{card.title}</h3>
            <p className={`mt-2 ${index % 2 === 1 ? 'text-gray-200' : 'text-gray-600'}`}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
