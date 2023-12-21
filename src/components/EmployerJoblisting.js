import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'


// JobCard component modified to receive job as a prop
const JobCard = ({ job, updateJob }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState();
  const [editedJob, setEditedJob] = useState(job);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedJob(job);
  };

  const handleSave = async () => {
    try {
      // Send PUT request to update job details in the backend
      await fetch(`/updatejob/${job._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedJob),
      });

      // Update the job details in the frontend state using the provided updateJob function
      setEditedJob(editedJob); // Update local editedJob state
      setIsEditing(false); 

    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true); // Set the loading state
      // Send DELETE request to delete the job in the backend
      await fetch(`/deletejob/${job._id}`, {
        method: 'DELETE',
      });

      // Update the frontend state by removing the deleted job
      updateJob(null); // Update job in the frontend state
      setIsDeleting(false); 
    } catch (error) {
      console.error('Error deleting job:', error);
    } finally {
      setIsDeleting(false); // Reset the loading state
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md shadow-slate-400 hover:shadow-slate-600 duration-200 p-4 m-4 w-[90%] m-auto">
      <h3 className="text-xl font-semibold mb-1">
        {isEditing ? (
          <input
            type="text"
            name="title"
            className="text-gray-600 shadow-md p-1 rounded border border-gray-400 w-[18rem] mb-2"
            value={editedJob.title}
            onChange={handleInputChange}
          />
        ) : (
          editedJob.title
        )}
      </h3>
      <p className="mb-2 italic">@  
        {isEditing ? (
          <input
            type="text"
            name="company"
            className="text-gray-600 shadow-md p-1 rounded border border-gray-400 w-[18rem] mb-2"
            value= {editedJob.company}
            onChange={handleInputChange}
          />
        ) : (
          editedJob.company
        )}
      </p>
      <div className='flex'>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ">
          {isEditing ? (
            <input
              type="text"
              name="skill"
              className="text-gray-600 shadow-md p-1 rounded bg-gray-200 w-[18rem]"
              value={editedJob.skill}
              onChange={handleInputChange}
            />
          ) : (
            editedJob.skill
          )}
        </p>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ml-2">
          {isEditing ? (
            <input
              type="text"
              name="workType"
              className="text-gray-600 shadow-md p-1 rounded bg-gray-200 w-[5rem]"
              value={editedJob.workType}
              onChange={handleInputChange}
              
            />
          ) : (
            editedJob.workType
          )}
        </p>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ml-2">
          {isEditing ? (
            <input
              type="number"
              name="salary"
              className="text-gray-600 shadow-md p-1 rounded bg-gray-200 w-[5rem]"
              value={editedJob.salary}
              onChange={handleInputChange}
            />
          ) : (
            `Rs. ${editedJob.salary}`
          )}
        </p>
      </div>
      <p className="text-gray-600 m-2 line-clamp-3">
        {isEditing ? (
          <textarea
            name="discription"
            className="text-gray-600 m-2 line-clamp-3 w-[28rem] h-[5rem]"
            value={editedJob.discription}
            onChange={handleInputChange}
          />
        ) : (
          editedJob.discription
        )}
      </p>
      <div className='flex justify-end'>
        {isEditing ? (
          <>
          <button className='h-8 w-14 bg-red-600 text-white border rounded mt-1 mr-1' onClick={handleDelete}>
              Delete
            </button>
            <button className='h-8 w-14 bg-[#0D4451] text-white border rounded mt-1 mr-1' onClick={handleSave}>Save</button>
            <button className='h-8 w-24 bg-[#0D4451] text-white border rounded mt-1' onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
          
            <button className="h-8 w-14 bg-[#0D4451] text-white border rounded mt-1 mr-1" onClick={handleEdit}>
              Edit
            </button>
            <button className='h-8 w-24 bg-[#0D4451] text-white border rounded mt-1'>
              <Link to={`/jobdetail/${job._id}`}>Job Detail</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const EmployerJoblisting = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 6;

  const fetchJobs = async () => {
    try {
      const response = await fetch('/joblist');
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Logic to calculate the index of the first and last job to display on the current page
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Function to handle next page
  const handleNextPage = () => {
    if (indexOfLastJob < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const handlePreviousPage = () => {
    if (indexOfFirstJob > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>
        <div className='flex justify-between mb-3 mt-9'>
          <h1 className='text-[3rem] text-start text-[#0D4451] ml-[12rem] mb-12'>Your Job Listing</h1>
        </div>

        <div className='w-[80%] m-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-9">
            {/* Mapping the appropriate array based on search results */}
            {(searchResults.length > 0 ? searchResults : currentJobs).map((job) => (
              <JobCard key={job._id} job={job}  />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-12'>
          <button
            onClick={handlePreviousPage}
            className={`mx-2 py-2 px-4 border ${indexOfFirstJob === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-[#0D4451]'}`}
            disabled={indexOfFirstJob === 0}
          >
            <GrFormPrevious />
          </button>
          <button onClick={handleNextPage} className={`mx-2 py-2 px-4 border ${indexOfLastJob >= jobs.length ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-[#0D4451]'}`}
            disabled={indexOfLastJob >= jobs.length}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </>
  );
};