import React from "react";

// Import images
import product1 from "../../assets/img1.jpg";
import product2 from "../../assets/logo.jpg";
import product3 from "../../assets/img3.jpg";
import product4 from "../../assets/img1.jpg";
import product5 from "../../assets/logo.jpg";
import product6 from "../../assets/img3.jpg";
import product7 from "../../assets/img1.jpg";
import product8 from "../../assets/logo.jpg";
import product9 from "../../assets/img3.jpg";
import product10 from "../../assets/img1.jpg";
import product11 from "../../assets/logo.jpg";
import product12 from "../../assets/img3.jpg";
import product13 from "../../assets/img1.jpg";
import product14 from "../../assets/logo.jpg";
import product15 from "../../assets/img3.jpg";

const Product = () => {
  // List of products with imported images
  const products = [
    { image: product1, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product2, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product3, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product4, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product5, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product6, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product7, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product8, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product9, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product10, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product11, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product12, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product13, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product14, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
    { image: product15, heading: "Some Heading Which is Short", subtitle: "Some Heading Which is longer than the heading we used" },
  ];

  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-5xl font-bold text-center text-indigo-900 mb-6">Our Products</h2>
      <p className="text-center text-gray-600 mb-10">
        Check out our premium products, designed to provide the best value.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border-gray-800 border-2 border-opacity-25 p-6 text-center hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.heading}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{product.heading}</h3>
            <p className="text-gray-600 mb-4">{product.subtitle}</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
