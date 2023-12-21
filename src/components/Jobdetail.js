import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; 

export const Jobdetail = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch(`/joblist/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJobDetail(data))
      .catch((error) => console.error('Error fetching job detail:', error));
  }, [jobId]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          jobId: jobId,
          name: name,
          email: email
        })
      });
      const data = await res.json();
      if (data.message === 'Application submitted successfully') { // Check the success message
        window.alert('Application submitted successfully!');
      } else {
        window.alert('Application submission failed.');
      }
    } catch (error) {
      console.error(error);
      alert('Login to submit application');
      navigate('/login');
    }
  };

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
              <p className='mb-2 italic'>@ {jobDetail.company}</p>
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
            <form onSubmit={handleSubmit}>
              <div className='flex gap-1'>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your Name'
                  className='h-12 w-[22rem] border rounded border-gray-300 pl-2 mb-2'
                />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Your Email'
                  className='h-12 w-[22rem] border rounded border-gray-300 pl-2'
                />
              </div>
              <div className='flex'>
                <button
                  type='submit'
                  className='h-12 w-[21rem] bg-[#F7A41B] text-white text-[1.3rem] mt-7 pb-2 rounded-full'>
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
