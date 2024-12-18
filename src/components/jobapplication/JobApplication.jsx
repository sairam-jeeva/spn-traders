import React from "react";

const JobApplicationForm = () => {
  return (
    <div className="min-h-screen bg-indigo-700 p-10 grid place-items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-auto mb-10">
        <h1 className="text-gray-400 font-medium mb-5 text-[30px]">Apply for Job with <span className="text-indigo-700">SPN Traders </span></h1>
        <hr className="mb-5 w-[100%] border-indigo-700"/>
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Job Application Form
        </h2>
        <form className="space-y-6">
          {/* Name Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email Section */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Degree and Category */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="degree">
                Degree
              </label>
              <input
                type="text"
                id="degree"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your degree"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your category"
              />
            </div>
          </div>
          {/* Year of Passing */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="yearOfPassing">
              Year of Passing
            </label>
            <input
              type="text"
              id="yearOfPassing"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the year of passing"
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="collegeName">
              Name of the College
            </label>
            <input
              type="text"
              id="collegeName"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your college name"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="skills">
              Skills
            </label>
            <textarea
              id="skills"
              rows="3"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="List your skills"
            ></textarea>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="coverLetter">
              Cover Letter
            </label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <span className="material-icons text-indigo-500 mr-2">cloud_upload</span>
              <input
                type="file"
                id="coverLetter"
                className="w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="resume">
              Upload Your Resume
            </label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <span className="material-icons text-indigo-500 mr-2">cloud_upload</span>
              <input
                type="file"
                id="resume"
                className="w-full"
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
