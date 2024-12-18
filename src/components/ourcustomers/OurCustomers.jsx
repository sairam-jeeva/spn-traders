import React from 'react';
import image1 from '../../assets/img1.jpg';
import image2 from '../../assets/img3.jpg';
import image3 from '../../assets/img1.jpg';
import image4 from '../../assets/img3.jpg';

const OurCustomers = () => {
  return (
    <div className="bg-gray-100 py-10">
     

      {/* Scrolling Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* Logos - duplicated for seamless scrolling */}
          {[image1, image2, image3, image4, image1, image2, image3, image4].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Customer ${index + 1}`}
              className="h-[70px] md:h-[90px] lg:h-[100px] w-auto mb-5 mx-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
