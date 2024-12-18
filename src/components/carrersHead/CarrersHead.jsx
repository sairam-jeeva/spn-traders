import React from 'react';

const CareersHead = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Heading */}
        <h1 className="text-indigo-700 text-[36px] md:text-[48px] lg:text-[50px] font-medium leading-tight">
        We’re more than just a workplace. <br /> We’re a family.
        </h1>
        <p className="text-gray-700 text-[16px] md:text-[18px] lg:text-[20px] mt-4 leading-relaxed">
        We know that finding a meaningful and rewarding career can be a long journey. <br /> Our goal is to make that process easy for you and to create a work environment <br /> that's enriching—one that you'll look forward to every day.</p>

        {/* Button */}
        <button className="w-32 h-12 md:w-36 md:h-14 lg:w-40 lg:h-14 rounded-xl mt-10 bg-indigo-700 omt-8 text-white text-sm md:text-base font-medium transition hover:bg-indigo-500">
          Some Button
        </button>
      </div>
    </>
  );
};

export default CareersHead;
