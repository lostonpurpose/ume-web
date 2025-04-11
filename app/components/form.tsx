"use client"; // Required for client-side interactivity in Next.js (ensures this runs in the browser)

import React, { useState } from 'react'; // Import React and the useState hook

// Define a functional component named Form
const Form = () => {
  // useState hook to store form values in a state object called formData
  // Initially, fname and lname are empty strings
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    description: ''
  });

  // This function updates formData when the user types into an input
  const handleChange = (e) => {
    // Spread existing form data, and update only the field that changed
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Dynamically sets fname or lname based on input's name attribute
    });
  };

  // This function handles what happens when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading on submit
    console.log(formData); // Log the form data to the console (you could send it to an API instead)
    setFormData({
      fname: '',
      lname: '',
      description: ''
    })
  };

  // JSX returned from the component – the form UI
  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-lg mx-auto p-8 border border-gray-300 rounded-lg shadow-lg"
    >
      {/* First Name Input */}
      <div className="mb-4">
        <label 
          htmlFor="fname" 
          className="block text-gray-700 font-semibold mb-2"
        >
          First Name
        </label>
        <input 
          type="text" 
          id="fname" 
          name="fname" // This matches the key in formData
          value={formData.fname} // Controlled input bound to state
          onChange={handleChange} // Call handleChange when the input changes
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Last Name Input */}
      <div className="mb-4">
        <label 
          htmlFor="lname" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Last Name
        </label>
        <input 
          type="text" 
          id="lname" 
          name="lname" // This matches the key in formData
          value={formData.lname} // Controlled input
          onChange={handleChange} // Updates formData
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

         {/* Text Area Input */}
      <div className="mb-4">
        <label 
          htmlFor="description" 
          className="block text-gray-700 font-semibold mb-2"
        >
          Please tell us about your issue.
        </label>

        <textarea id="w3review" name="w3review" rows="4" cols="50"
        id="lname" 
        name="description" // This matches the key in formData
        value={formData.description} // Controlled input
        onChange={handleChange} // Updates formData
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Type here.
        </textarea>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form; // Export the component so it can be used in other parts of the app
