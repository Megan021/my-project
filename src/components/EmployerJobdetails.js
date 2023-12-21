import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EmployerJobdetails = () => {
  const { jobId } = useParams();
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    fetch(`/joblist/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJobDetail(data))
      .catch((error) => console.error('Error fetching job detail:', error));
  }, [jobId]);


  // Check if the data is still being fetched
  if (!jobDetail) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex items-center h-[15rem] w-[80%] mt-14 border border-gray-300 rounded'>
          <div className='flex justify-around'>

            <div className='p-5'>
              <h2 className='text-4xl mb-3'>{jobDetail.title}</h2>
              <button className='h-7 w-20 text-white bg-[#0D4451] border rounded-lg mb-5 mr-2'>{jobDetail.workType}</button>
              <button className='py-[2px] text-white bg-[#0D4451] border rounded-lg mb-5 mr-2 px-2'>{jobDetail.skill && jobDetail.skill.join(', ')}</button>
              <button className='py-[2px] w-20 text-white bg-[#0D4451] border rounded-lg mb-5 mr-2'>Rs. {jobDetail.salary}</button>
              <p className='pr-5 line-clamp-3'>{jobDetail.discription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-[9.4rem]'>
        <div className='flex h-auto w-[60%] mt-14 border border-gray-300 rounded'>
          <div className='pl-5 pr-5 pt-5 space-y-5'>
            <h2 className='text-3xl font-medium'>Job Discription</h2>
            <p>{jobDetail.discription}</p>
          </div>
        </div>
      </div>
    </>
  )
}
