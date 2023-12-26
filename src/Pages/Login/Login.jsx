import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
         

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

         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-900 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-indigo-800"
          >
            Login
          </button>
            {/* Line or Link to Login Page */}
            <p className="mt-4 text-sm text-gray-600">
            Not yet Register? {' '}
            <Link to="/SignUpPage" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>

 </>
  );
};

export default LoginPage;
