import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import Employer from '../images/Employer2.jpg';
import Jobseeker from '../images/heroimg.jpg';


export const Login = () => {


  return (
    <>
      <div className='flex mt-10 justify-center'>
        <div className='h-[30rem] w-[25rem] bg-[#0D4451] flex items-center border rounded-l-md shadow-2xl'>
          <div>
            <img className='h-[8rem] w-[auto] pl-[8.4rem]' src={Logo} alt="Logo Img" /><br />
            <h2 className='text-white text-3xl text-center'>JobDoors</h2>
            <p className='text-center text-white p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, esse.</p>
          </div>
        </div>

        <div className='h-[30rem] w-[40rem] bg-white shadow-xl border border-gray-300 rounded-r-md'>
        <h2 className='text-4xl text-center font-semibold mb-5 mt-9'>Login As</h2>
          <div className='h-[10rem] w-[27rem] mb-5 rounded-lg shadow-md shadow-slate-400 hover:shadow-slate-600 duration-200 m-auto'>
            <Link to='/employerlogin'>
              <img className='h-[8rem] m-auto' src={Employer} alt='Employer Img' />
              <h2 className='text-center '>Admin Login</h2>
            </Link>
          </div>
          <div className='h-[10rem] w-[27rem] rounded-lg shadow-md shadow-slate-400 hover:shadow-slate-600 duration-200 m-auto'>
            <Link to='/jobseekerlogin'>
              <img className='h-[7rem] m-auto' src={Jobseeker} alt='Employer Img' />
              <h2 className='text-center pt-[1.2rem]'>Jobseeker Login</h2>
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

