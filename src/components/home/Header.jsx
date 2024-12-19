import React, { useState, useEffect } from "react";
import image1 from '../../assets/glass2.jpg';
import image4 from '../../assets/beer_cullet.jpeg';
import image5 from '../../assets/metal.jpeg';
import image6 from '../../assets/beer_cullet2.jpeg';


const Header = () => {
  // List of image URLs
  const images = [image1,image4,image5,image6];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="bg-indigo-800 h-[900px] py-10">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <div className="px-4 sm:px-8 lg:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-5 font-bold text-white mb-4">
            Welcome to SPN Traders
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-5 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            libero odit, quis consequuntur eaque consectetur. <br /> Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-white text-indigo-600 text-sm sm:text-base lg:text-lg font-medium px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-indigo-600 transition duration-300">
            Explore More
          </button>
        </div>

        {/* Scrolling Image Grid */}
        <div className="mt-10 flex justify-center">
          <div className="w-full sm:w-[700px] lg:w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden relative">
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
              <img
                src={images[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-full object-fit rounded-lg transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
