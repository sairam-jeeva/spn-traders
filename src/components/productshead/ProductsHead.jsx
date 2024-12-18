import React from 'react';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img3.jpg';
import image3 from '../../assets/img1.jpg';
import image4 from '../../assets/img3.jpg';

const AboutHead = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-indigo-800 text-center px-4">
        {/* Heading */}
        <h1 className="text-white text-[36px] md:text-[48px] lg:text-[50px] font-medium leading-tight">
          Some Heading which lasts two Lines <br /> with SPN Traders
        </h1>
        <p className="text-gray-300 text-[16px] md:text-[18px] lg:text-[20px] mt-4 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Iure culpa, voluptas ratione facere atque rem natus voluptate
        </p>

        {/* Button */}
        <button className="w-32 h-12 md:w-36 md:h-14 lg:w-40 lg:h-14 rounded-xl bg-white mt-8 text-indigo-800 text-sm md:text-base font-medium transition hover:bg-gray-200">
          Some Button
        </button>

        {/* Logos Section */}
        <div className="mt-20 w-full">
           
          <div className="flex justify-center gap-32  flex-wrap">

              {[image1, image2, image3, image4].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Customer ${index + 1}`}
                  className="h-[70px] md:h-[90px] rounded-2xl lg:h-[100px] w-auto"
                />
            ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutHead;
