import React from 'react';

const Customers = () => {
  return (
    <div className="bg-indigo-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-16 lg:gap-x-24 text-center">
          <div>
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold">
              100+
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white opacity-80 leading-relaxed">
              Hundreds of Projects Done <br /> Successfully
            </p>
          </div>
          <div>
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold">
              15+
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white opacity-80 leading-relaxed">
              We have 15 Quality Products <br /> From Our Side
            </p>
          </div>
          <div>
            <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] text-white font-bold">
              20+
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white opacity-80 leading-relaxed">
              We have 20+ Years of Experience <br /> in This Field
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
