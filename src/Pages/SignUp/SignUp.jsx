import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'student', // Default user type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Form Data:', formData);
    // You can make an API request or perform other actions based on the form data
  };

  return (
    <>

     
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:mt-10"> {/* Added md:mt-8 */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-900"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-900"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-900"
              required
            />
          </div>

          {/* User Type (Company/Student) */}
          <div className="mb-4">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-600">
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-indigo-900"
            >
              <option value="student">Student</option>
              <option value="company">Company</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-indigo-800"
          >
            Sign Up
          </button>
            {/* Line or Link to Login Page */}
            <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>

 </>
  );
};

export default SignUpPage;
