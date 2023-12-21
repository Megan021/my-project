import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function mergeSortBySalary(arr, order) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const sortedLeft = mergeSortBySalary(leftHalf, order);
  const sortedRight = mergeSortBySalary(rightHalf, order);

  return mergeBySalary(sortedLeft, sortedRight, order);
}

function mergeBySalary(left, right, order) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if ((order === 'highToLow' && left[leftIndex].salary >= right[rightIndex].salary) ||
      (order === 'lowToHigh' && left[leftIndex].salary <= right[rightIndex].salary)) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// JobCard component modified to receive job as a prop
const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md shadow-slate-400 hover:shadow-slate-600 duration-200 p-4 m-4 w-[90%] m-auto">
      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
        <p className='mb-2 italic'>@ {job.company}</p>
      <div className='flex'>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ">{job.skill && job.skill.join(', ')}</p>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ml-2">{job.workType}</p>
        <p className="text-gray-600 shadow-md p-1 rounded bg-gray-200 ml-2">Rs. {job.salary}</p>
      </div>
      <p className="text-gray-600 m-2 line-clamp-3">{job.discription}</p>
      <div className='flex justify-end'>
        <button className='h-8 w-24 bg-[#0D4451] text-white border rounded mt-1'>
          <Link to={`/jobdetail/${job._id}`}>Job Detail</Link>
        </button>
      </div>
    </div>
  );
};

export const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingOrder, setSortingOrder] = useState('lowToHigh');
  const [searchQuery, setSearchQuery] = useState('');
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

  const boyerMooreSearch = (text, pattern) => {
    const textLength = text.length;
    const patternLength = pattern.length;

    if (patternLength === 0) {
      return -1; // Invalid pattern
    }
    const lastOccurrence = new Array(256).fill(-1)
    for (let i = 0; i < patternLength; i++) {
      lastOccurrence[pattern.charCodeAt(i)] = i;
    }

    let skip;
    for (let i = 0; i <= textLength - patternLength; i += skip) {
      skip = 0;
      for (let j = patternLength - 1; j >= 0; j--) {
        if (pattern[j] !== text[i + j]) {
          skip = Math.max(1, j - lastOccurrence[text.charCodeAt(i + j)]);
          break;
        }
      }

      if (skip === 0) {
        return i; // Match found at index i
      }
    }

    return -1; // Match not found
  };

  // Function to handle searching
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]); // Clear search results
    } else {
      const filteredJobs = jobs.filter((job) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const lowerCaseTitle = job.title.toLowerCase();
        const lowerCaseDescription = job.discription.toLowerCase();
        const lowerCaseSkill = Array.isArray(job.skill)
          ? job.skill.map(skill => skill.toLowerCase()).join(' ') // Join array elements into a string
          : typeof job.skill === 'string'
            ? job.skill.toLowerCase()
            : '';
        // Search in lowercase for case-insensitive search
        return (
          boyerMooreSearch(lowerCaseTitle, lowerCaseQuery) !== -1 ||
          boyerMooreSearch(lowerCaseDescription, lowerCaseQuery) !== -1 ||
          boyerMooreSearch(lowerCaseSkill, lowerCaseQuery) !== -1
        );
      });
      setSearchResults(filteredJobs);
    }
    setCurrentPage(1); // Reset to first page after searching
  };


  // Function to sort jobs based on salary
  const handleSortBySalary = () => {
    const sortedJobs = mergeSortBySalary(jobs, sortingOrder);
    setJobs(sortedJobs);
    setSortingOrder(sortingOrder === 'lowToHigh' ? 'highToLow' : 'lowToHigh');
  };

  return (
    <>
      <div>
        <div className='flex justify-between mb-3 mt-9'>
          <h1 className='text-[3rem] text-start text-[#0D4451] ml-[12rem] mb-12'>Job Listing</h1>
          <div className='flex justify-center mt-4'>
            <input type='text' placeholder='Search job titles' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='px-2 py-1 border border-gray-500 rounded h-12 w-[19rem]' />
            <button onClick={handleSearch} className='ml-2 ring-2 ring-[#F7A41B] h-12 text-black px-3 py-1 rounded'>Search </button>
          </div>

          <div className="flex justify-end mb-1 mr-[11.3rem]">
            <button onClick={handleSortBySalary} className="h-12 w-auto bg-[#0D4451] text-white border rounded p-2 shadow-md hover:shadow-slate-600 duration-200 mt-[1rem]">
              {sortingOrder === 'lowToHigh' ? 'Salary: High to Low' : 'Salary: Low to High'}
            </button>
          </div>
        </div>

        <div className='w-[80%] m-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-9">
            {/* Mapping the appropriate array based on search results */}
            {(searchResults.length > 0 ? searchResults : currentJobs).map((job) => (
              <JobCard key={job._id} job={job} />
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


