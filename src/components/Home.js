import React from 'react'
import { Category } from './Catogery';
import { Joblist } from './Joblist';
import Hero from '../images/heroimg2.jpg'
// import { BsSearch } from 'react-icons/bs'

export const Home = () => {

  return (
    <>
      <div className='flex justify-evenly h-[35rem] border border-gray-300 shadow-md rounded-md m-9 pt-7'>
        {/* <div className='pt-24 pl-12'>
                    <h1 className='font-bold text-6xl'>Find a Job</h1><br />
                    <h2 className='font-bold text-5xl'>Get Hired</h2><br />
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3><br />
                    <div className='flex'>
                        <input type='search' name='search' id='search' placeholder='search...' className='h-12 w-80 ring-2 ring-[#0D4451] rounded-l-lg pl-4 ring-inset' />
                            <button className='h-12 w-[5rem] bg-[#F7A41B] rounded-r-lg ml-0.5 text-white'><BsSearch className='ml-6 h-7 w-auto'/></button>
                    </div>
                </div> */}
        <div className='pt-[7.5rem] pl-12'>
          <h1 className='text-[#0D4451] font-bold text-6xl'>Find a Job</h1><br />
          <h2 className='text-[#0D4451] font-bold text-5xl'>Get Hired</h2><br />
          <h3 className='w-[25rem] text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#F7A41B] to-[#0D4451]'>Explore a world of career opportunities on our Jobseeker page. Find, apply, and elevate your journey with ease. Your path to professional success starts here, where every click brings you closer to your dream job.</h3><br />
         
        </div>

        <div>
          <img className='h-[32rem]' src={Hero} alt="Hero Img" />
        </div>
      </div>
      <Category />
      <Joblist />
    </>
  )
};
