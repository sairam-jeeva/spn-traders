import React, { useState } from 'react';
// Import images
import product1 from "../../assets/beer_cullet.jpeg";
import product2 from "../../assets/glass.jpeg";
import product3 from "../../assets/glass2.jpg";
import product4 from "../../assets/green_cullets.jpeg";
import product5 from "../../assets/metal.jpeg";

const ProductsList = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Array of product objects
  const products = [
    {
      id: 1,
      name: 'Beer Cullet',
      image: product1,
      description: 'Premium quality beer cullet for various applications.',
    },
    {
      id: 2,
      name: 'Blue Beer Glass',
      image: product2,
      description: 'Elegant blue beer glass for a stylish drink experience.',
    },
    {
      id: 3,
      name: 'Clear Glass',
      image: product3,
      description: 'High-quality clear glass for versatile uses.',
    },
    {
      id: 4,
      name: 'Green Cullet',
      image: product4,
      description: 'Beautiful green cullet for decorative purposes.',
    },
    {
      id: 5,
      name: 'Metal Glass',
      image: product5,
      description: 'Durable and stylish metal glass for modern use.',
    },
    {
      id: 1,
      name: 'Beer Cullet',
      image: product1,
      description: 'Premium quality beer cullet for various applications.',
    },
    {
      id: 2,
      name: 'Blue Beer Glass',
      image: product2,
      description: 'Elegant blue beer glass for a stylish drink experience.',
    },
    {
      id: 3,
      name: 'Clear Glass',
      image: product3,
      description: 'High-quality clear glass for versatile uses.',
    },
    {
      id: 4,
      name: 'Green Cullet',
      image: product4,
      description: 'Beautiful green cullet for decorative purposes.',
    },
    {
      id: 5,
      name: 'Metal Glass',
      image: product5,
      description: 'Durable and stylish metal glass for modern use.',
    },
    {
      id: 1,
      name: 'Beer Cullet',
      image: product1,
      description: 'Premium quality beer cullet for various applications.',
    },
    {
      id: 2,
      name: 'Blue Beer Glass',
      image: product2,
      description: 'Elegant blue beer glass for a stylish drink experience.',
    },
    {
      id: 3,
      name: 'Clear Glass',
      image: product3,
      description: 'High-quality clear glass for versatile uses.',
    },
    {
      id: 4,
      name: 'Green Cullet',
      image: product4,
      description: 'Beautiful green cullet for decorative purposes.',
    },
    {
      id: 5,
      name: 'Metal Glass',
      image: product5,
      description: 'Durable and stylish metal glass for modern use.',
    },
  ];

  // Handle card click
  const handleCardClick = (id) => {
    setActiveCard(products.find((product) => product.id === id));
  };

  // Close popup
  const handleClosePopup = () => {
    setActiveCard(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Our Premium Products
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-700 mt-2">
                {product.description.substring(0, 50)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for active card */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            {/* Image */}
            <img
              src={activeCard.image}
              alt={activeCard.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            {/* Details */}
            <div className="mt-4 text-center">
              <h2 className="text-3xl font-bold text-blue-800">{activeCard.name}</h2>
              <p className="text-gray-700 mt-4">{activeCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
