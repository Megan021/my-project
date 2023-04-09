import React from 'react'
import CompanyLogo from '../images/companylogo.jpg'
import { Link } from 'react-router-dom'

export const Joblist = () => {
    return (
        <>
            <div>
                <h1 className='flex font-bold text-5xl justify-center pt-20 mb-14'>Job Listing</h1>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button className='h-8 w-24 bg-[#0D4451] text-white border rounded '><Link to='/jobdetail'>Job Detail</Link></button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                        <div className='w-[34rem] h-[11.5rem] border rounded-lg shadow-xl flex'>
                            <div>
                                <img className='pt-6 w-[30rem]' src={CompanyLogo} alt='Company Logo' />
                            </div>
                            <div>
                                <h2>Company Name</h2><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum laudantium magnam soluta quia rerum.</p><br />
                                <button>Job Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <button className='mt-24 bg-[#0D4451] text-xl text-white border rounded h-10 w-32'>View More</button>
                </div>
            </div>
        </>
    )
}
