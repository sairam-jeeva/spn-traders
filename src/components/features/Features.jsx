import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🌟", // You can replace this with an actual icon component or image
      heading: "High Quality",
      subheading: "We ensure top-notch quality in all our products.",
    },
    {
      icon: "🚀",
      heading: "Fast Delivery",
      subheading: "Quick and reliable delivery services tailored for you.",
    },
    {
      icon: "💼",
      heading: "Professional Support",
      subheading: "Our team is here to support you 24/7 with expertise.",
    },
    {
      icon: "🌍",
      heading: "Eco-Friendly",
      subheading: "We prioritize sustainability in our operations.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl mt-10 font-bold text-center text-indigo-900 mb-6">
          Explore Our Amazing Features
        </h2>
        <p className="text-gray-600 text-center mb-10">
        We deliver exceptional value
          through our key features,
          <br />
          Discover the benefits of working with us.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white group rounded-lg border-gray-800 border-[1px] border-opacity-25 p-6 text-center hover:shadow-lg hover:bg-indigo-500 transition duration-300"
            >
              {/* Icon */}
              <div
  className={`text-4xl bg-indigo-100 text-indigo-900 w-16 h-16 flex items-center justify-center mx-auto rounded-full ${
    index === 2 ? "pb-3" : "mb-4"
  }`}
>
  {feature.icon}
</div>

              {/* Heading */}
              <h3 className="text-xl font-semibold group-hover:text-white text-indigo-900 mb-2">
                {feature.heading}
              </h3>
              {/* Subheading */}
              <p className="text-gray-600 group-hover:text-white">{feature.subheading}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
