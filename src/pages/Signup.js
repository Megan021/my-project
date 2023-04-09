import React from 'react'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs'

export const Signup = () => {
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
        <div className='h-[30rem] w-[40rem] bg-white shadow-2xl border rounded-r-md'>
          <div className='ml-[9.5rem]'>
            <h2 className='text-4xl font-semibold mb-5 mt-9'>Sign Up</h2>
            <p className='mb-1'>Email</p>
            <input type='email' name="name" id='name' placeholder='Enter Email' className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
            <p className='mb-1'>Password</p>
            <input type='password' name="name" id='name' placeholder='Create Password' className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />

            <br />
            <div>
            <input type='radio' name='radio' value='Employee' id='employee' />
            <label htmlFor="employee" className='ml-1 text-lg pr-8'>Employee</label>
            <input type='radio' name='radio' value='Jobeeker' id='jobeeker' />
            <label htmlFor="jobeeker" className='ml-1 text-lg '>Jobseeker</label>
            </div>

            <button className='h-12 w-[11rem] bg-[#0D4451] text-white text-[1.3rem] pb-1 mt-9 rounded-md'>Sign Up</button> <br />
            <div className='mt-5 flex'>
              <Link to='/login' className='text-lg underline underline-offset-2'>Already have an account ?</Link>
              <i><BsArrowLeftCircleFill className='h-5 w-auto ml-4 mt-1' color='#F7A41B' /></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


