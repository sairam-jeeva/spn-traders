import React, { useState } from 'react';
import product1 from '../../assets/beer_cullet.jpeg';
import product2 from '../../assets/blue_beer.jpg';
import product3 from '../../assets/glass.jpeg';
import product4 from '../../assets/glass2.jpg';
import product5 from '../../assets/green_cullets.jpeg'
import product6 from '../../assets/img1.jpg'
import product7 from '../../assets/img2.jpg'
import product9 from '../../assets/img3.jpg'
import product8 from '../../assets/logo.jpg'
import product10 from '../../assets/kraft.jpeg'
// import product11 from '../../assets/logo.jpg'
// import product12 from '../../assets/metal.jpeg'
// import product13 from '../../assets/beer_cullet.jpeg'
// import product14 from '../../assets/glass.jpeg'
// import product15 from '../../assets/green_cullets.jpeg'


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
      name: 'Decorative Glass',
      image: product4,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 5,
      name: 'Decorative Glass',
      image: product5,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 6,
      name: 'Decorative Glass',
      image: product6,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 7,
      name: 'Decorative Glass',
      image: product7,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 8,
      name: 'Decorative Glass',
      image: product8,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 9,
      name: 'Decorative Glass',
      image: product9,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
    {
      id: 10,
      name: 'Decorative Glass',
      image: product10,
      description: 'Beautiful decorative glass to enhance your decor.',
    },
  ];

  // Handle card click
  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Our Premium Products
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-white rounded-xl shadow-md transform transition-all duration-500 ease-in-out ${
              activeCard === product.id
                ? 'col-span-2 row-span-1 scale-105'
                : 'scale-100'
            }`}
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-56 object-cover rounded-t-xl transition-all duration-500 ${
                activeCard === product.id ? 'rounded-none' : 'rounded-t-xl'
              }`}
            />
            <div
              className={`p-6 transition-all duration-500 ${
                activeCard === product.id ? 'text-center mt-4' : ''
              }`}
            >
              <h2
                className={`text-3xl font-bold text-gray-900 mb-3 transition-all duration-500 ${
                  activeCard === product.id ? 'text-blue-800' : 'text-gray-900'
                }`}
              >
                {product.name}
              </h2>
              <p
                className={`text-gray-700 transition-all duration-500 ${
                  activeCard === product.id ? 'hidden' : 'block'
                }`}
              >
                {product.description}
              </p>
              {activeCard === product.id && (
                <p className="text-gray-700">
                  Discover more about this product and its unique features.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
