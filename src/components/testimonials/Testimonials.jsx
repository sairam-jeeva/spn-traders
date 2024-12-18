import React, { useState, useEffect } from 'react';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/logo.jpg';
import image3 from '../../assets/img3.jpg';

const testimonials = [
  {
    name: "Maria Menounos",
    title: "Actress & TV Host",
    quote:
      "I feel on top of the world. I feel incredibly motivated. I feel empowered. I am the master of my own destiny.",
    image: image1, // Use direct image imports
  },
  {
    name: "Serena Williams",
    title: "American Professional Tennis Player",
    quote:
      "Tony Robbins helped me discover what I am really made of. With Tony's help, I’ve set new standards for myself, and I’ve taken my tennis game—and my life—to a whole new level!",
    image: image2, // Use direct image imports
  },
  {
    name: "Marc Benioff",
    title: "Chairman and CEO of Salesforce",
    quote:
      "Tony Robbins and his strategies and tools have been at the core of our culture from the beginning. He’s been one of the critical keys to Salesforce’s leadership in cloud computing",
    image: image3, // Use direct image imports
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  return (
    <div className="bg-gray-200 py-10 px-5 lg:px-20">
      <h2 className="text-center text-indigo-800 text-3xl font-bold mb-8">
        What People Say
      </h2>
      <div className="flex flex-col items-center">
        <div className="relative bg-indigo-800 shadow-lg rounded-lg p-6 w-full max-w-3xl text-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="h-20 w-20 rounded-full mx-auto border-4 border-blue-300"
          />
          <h4 className="mt-4 text-xl font-bold text-white">
            {testimonials[currentIndex].name}
          </h4>
          <span className="text-gray-500">{testimonials[currentIndex].title}</span>
          <p className="mt-4 text-lg italic text-white">
            "{testimonials[currentIndex].quote}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
