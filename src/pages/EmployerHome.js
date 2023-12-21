import React from 'react'
import { Joblist } from '../components/Joblist';
import { Link } from 'react-router-dom';
import Hero from '../images/heroimg2.jpg'
import { AiOutlineArrowLeft, AiFillSetting } from 'react-icons/ai'
import {FaWpforms} from 'react-icons/fa'

const EmployerHome = () => {

    return (
        <>

            <div className='flex justify-evenly h-[35rem] border border-gray-300 shadow-md rounded-md m-9 pt-7 mb-[5rem]'>
                <div className='pt-[3rem] pl-12'>
                    <h1 className='text-[#0D4451] font-bold text-6xl'>Post a Job</h1><br />
                    <h2 className='text-[#0D4451] font-bold text-5xl'>Hire Talent</h2><br />
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3><br />

                    <Link to='/postajob'>
                        <div className='flex'>
                            <div className='h-12 w-[13rem] bg-[#F7A41B] rounded-l-lg pl-[1.5rem] pt-[10px] font-bold text-white text-md shadow-md hover:shadow-slate-600 duration-200'>
                                Click Here to Post Job
                            </div>
                            <button >
                                <AiOutlineArrowLeft className='ml-4 h-7 w-auto' />
                            </button>
                        </div>
                    </Link>


                    <div className='mt-7 flex h-[3rem] w-[13rem] shadow-md shadow-gray-400 rounded hover:shadow-slate-600 duration-200'>
                        <Link to='/employerjoblisting'>
                            <button className='pt-2 text-lg ml-2'>Manage Your Jobs</button>
                        </Link>
                        <AiFillSetting className='text-[#0D4451] h-[1.8rem] w-[1.8rem] ml-4 mt-2' />
                    </div>

                    <div className='mt-7 flex h-[3rem] w-[13rem] shadow-md shadow-gray-400 rounded hover:shadow-slate-600 duration-200 '>
                        <Link to='/jobapplication'>
                            <button className='pt-2 text-lg ml-2 pl-3'>Job Application</button>
                        </Link>
                        <FaWpforms className='text-[#0D4451] h-[1.8rem] w-[1.8rem] ml-4 mt-2' />
                    </div>

                </div>

                <div>
                    <img className='h-[32rem]' src={Hero} alt="Hero Img" />
                </div>
            </div>

            <Joblist />
        </>
    )
}

export default EmployerHome