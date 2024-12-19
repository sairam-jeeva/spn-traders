import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-indigo-600 min-h-screen py-12 px-6 font-sans">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-white font-medium">Contact us</p>
        <h1 className="text-4xl font-bold text-white mt-2">
          Get in touch with our team
        </h1>
        <p className="text-slate-400 mt-4">
          We have the team and know-how to help you scale 10x faster.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="relative mt-12 flex justify-center bg-indigo-600 ">
        <div className="w-full max-w-6xl">
          <iframe
title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7082406630793!2d77.8847580740273!3d11.500957845414057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95f2794c0aff9%3A0x6f875288d2277088!2sSPN%20TRADERS!5e0!3m2!1sen!2sin!4v1734591663867!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Chat to Sales */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-2xl mb-4">
            <i className="fas fa-comments"></i>
          </div>
          <h3 className="font-bold text-lg text-gray-900">Chat to sales</h3>
          <p className="text-gray-600 mt-2">Speak to our friendly team.</p>
          <a
            href="mailto:sales@yourdomain.com"
            className="text-blue-600 font-medium mt-4 block"
          >
            sales@yourdomain.com
          </a>
        </div>

        {/* Chat to Support */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-2xl mb-4">
            <i className="fas fa-headset"></i>
          </div>
          <h3 className="font-bold text-lg text-gray-900">Chat to support</h3>
          <p className="text-gray-600 mt-2">We’re here to help.</p>
          <a
            href="mailto:support@yourdomain.com"
            className="text-blue-600 font-medium mt-4 block"
          >
            support@yourdomain.com
          </a>
        </div>

        {/* Visit Us */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-2xl mb-4">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3 className="font-bold text-lg text-gray-900">Visit us</h3>
          <p className="text-gray-600 mt-2">Visit our office HQ.</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium mt-4 block"
          >
            View on Google Maps
          </a>
        </div>

        {/* Call Us */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-600 text-2xl mb-4">
            <i className="fas fa-phone"></i>
          </div>
          <h3 className="font-bold text-lg text-gray-900">Call us</h3>
          <p className="text-gray-600 mt-2">Mon-Fri from 8am to 5pm.</p>
          <a
            href="tel:+15550000000"
            className="text-blue-600 font-medium mt-4 block"
          >
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
