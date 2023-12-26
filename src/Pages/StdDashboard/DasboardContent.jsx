import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DashboardPage = () => {
  // Dummy data for jobs
  const jobs = [
    {
      id: 1,
      title: 'Software Developer',
      description: 'Exciting opportunity for a software developer...',
      applicants: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        // Add more student data as needed
      ],
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      description: 'Join our design team and create stunning user experiences...',
      applicants: [
        { id: 3, name: 'Alice Doe' },
        { id: 4, name: 'Bob Doe' },
        // Add more student data as needed
      ],
    },
    // Add more job data as needed
  ];

  // State to track the selected job and its applicants
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open/close the modal and show students who applied
  const toggleModal = (jobId) => {
    const job = jobs.find((job) => job.id === jobId);
    setSelectedJob(job);
    setModalOpen(!isModalOpen);
  };

  const [isModalOpen1, setModalOpen1] = useState(false);

  // Function to open/close the modal
  const toggleModal1 = () => {
    setModalOpen1(!isModalOpen1);
  };

   const [isModalOpen2, setModalOpen2] = useState(false);

  // Function to open/close the modal
  const toggleModal2 = () => {
    setModalOpen2(!isModalOpen2);
  };

  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      {/* Page Title */}
      <div className="    p-4 mb-4 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0 sm:text-center sm:justify-center"> Jobs For you </h1>
        {/* Your toggle button goes here */}
        <button
          className="px-4 py-2 bg-indigo-900 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          onClick={toggleModal1}
        >
         Profile
        </button>
      </div>

      {/* Job List */}
      <div className="p-6">
        {/* Job Cards */}
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 mb-4 rounded-md shadow-md flex flex-col sm:flex-row items-center justify-between"
          >
            {/* Job Details */}
            <div className="flex-grow sm:pr-4 mb-4 sm:mb-0">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">{job.description}</p>
            </div>

            {/* Number of Applicants */}
            <div
              className="flex-shrink-0 bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
          
            >
              Apply Now
            </div>
          </div>
        ))}
      </div>

      {/* Students Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">{selectedJob.title} Applicants</h3>
            <ul>
              {selectedJob.applicants.map((applicant) => (
                <li onClick={toggleModal2} key={applicant.id}><Link>{applicant.name}</Link></li>
              ))}
            </ul>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded-md" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}

       {/* New Job Modal */}
       {isModalOpen1 && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">New Job</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Job Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                id="title"
                type="text"
                placeholder="Enter job title"
                name="title"
                // value={newJob.title}
                // onChange={handleNewJobChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Job Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                id="description"
                placeholder="Enter job description"
                name="description"
               
              />
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            
            >
              Update
            </button>
            <button
              className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
              onClick={toggleModal1}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isModalOpen2 && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Student Details</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                id="title"
                type="text"
                placeholder="Enter job title"
                name="title"
                disabled
                // value={newJob.title}
                // onChange={handleNewJobChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                id="title"
                type="text"
                placeholder="Enter job title"
                name="title"
                disabled
                // value={newJob.title}
                // onChange={handleNewJobChange}
              />
            </div>
           
          
            <button
              className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
              onClick={toggleModal2}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
