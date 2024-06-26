import { useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [inputURL, setInputURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputURL(e.target.value);
  };

  const handleShortenClick = async () => {
    if (!inputURL) {
      setError('Please enter a URL');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5050/url', { url: inputURL });
      const baseUrl = 'http://localhost:5050';
      setShortenedURL(`${baseUrl}/${response.data.id}`);
      setError('');
    } catch (error) {
      console.error('Error creating shortened URL:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Failed to shorten the URL. Please try again.');
      }
    }
  };

  return (
    <div
      id="home"
      className="text-center bg-cover bg-center h-screen mx-12 mt-5 mb-12 rounded-2xl"
      style={{ backgroundImage: "url('/assets/10-2500x1667.jpg')" }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white font-bold">URL Shortener</h1>
        <p className="text-white text-xl mt-4">
          {shortenedURL ? 'Here is your shortened URL' : 'Paste your untidy link to shorten it'}
        </p>
        <div className="flex mt-6">
          {shortenedURL ? (
            <input
              type="text"
              value={shortenedURL}
              readOnly
              className="p-2 rounded-md w-64 md:w-80"
            />
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter URL"
                value={inputURL}
                onChange={handleInputChange}
                className="p-2 rounded-l-md w-64 md:w-80 hover:scale-105"
              />
              <button
                onClick={handleShortenClick}
                className="bg-violet-800 text-white p-2 rounded-r-md w-36 hover:scale-105 hover:bg-violet-600"
              >
                Shorten
              </button>
            </>
          )}
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default HeroSection;
