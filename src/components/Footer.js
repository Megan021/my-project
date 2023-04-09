import React from 'react'
import Logo from '../images/logo.jpg'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import {MdAlternateEmail, MdManageAccounts} from 'react-icons/md'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <div className='h-96 bg-[#0D4451] mt-16'>
                <div className='flex justify-around'>
                    <div className='pt-16'>
                        <div className='flex mb-6'>
                        <img src={Logo} alt='Logo' className='h-auto w-[7rem] border rounded' />
                        <h2 className='text-6xl text-[#F7A41B] mt-[3rem] ml-6'>JobDoors</h2>
                        </div>
                        <p className='text-white mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur dolore<br /> reprehenderit qui cupiditate minima. Magnam quo sit nulla possimus,<br /> ex odio neque voluptas recusandae! Ad quos sint in sapiente harum.</p>
                        <div className='flex mt-7 ml-20 gap-7'>
                            <i><AiFillLinkedin className='h-[3rem] w-[5rem]' color='white' /></i>
                            <i><AiFillGithub className='h-[3rem] w-[5rem]' color='white' /></i>
                            <i><AiOutlineMail className='h-[3rem] w-[5rem]' color='white' /></i>
                        </div>
                    </div>
                    <div className='pt-16 text-white space-y-7'>
                        <h2 className='text-4xl text-[#F7A41B]'>About Me</h2>
                        <ul className='space-y-7'>
                            <li className='flex'><MdManageAccounts className='mr-3 mt-[0.4rem]'/>Megan Nagarkoti</li>
                            <li className='flex'><AiFillPhone className='mr-3 mt-[0.4rem]'/>+977-9808528660</li>
                            <li className='flex'><MdAlternateEmail className='mr-3 mt-[0.4rem]'/>megan.nagarkoti123@gmail.com</li>
                        </ul>
                    </div>
                    <div className='pt-16 text-white space-y-7'>
                        <h2 className='text-4xl text-[#F7A41B]'>Quick Links</h2>
                        <ul className='space-y-7'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/jobs'>Jobs</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};