import React from 'react'
import MyPic from '../images/myimg.jpg'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export const About = () => {
  return (
    <>
      <h2 className='text-[3rem] text-center text-[#0D4451] mt-12'>About Author</h2>
      <div className='flex justify-evenly mt-16 '>
        <div>
          <img src={MyPic} alt='My Image' className='h-[30rem] w-auto border rounded' />
        </div>
        <div>
          <h2 className='text-5xl mb-7 text-white h-[4rem] w-[25rem] bg-[#F7A41B] border rounded-t-lg pl-3'>Megan Nagarkoti</h2>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae aut earum dolorum<br /> iure adipisci eaque repellendus totam laborum ipsam fuga voluptate unde asperiores <br />maiores voluptatibus, alias vero quasi sed! Temporibus corporis quaerat in nobis.</p><br/>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae aut earum dolorum<br /> iure adipisci eaque repellendus totam laborum ipsam fuga voluptate unde asperiores <br />maiores voluptatibus, alias vero quasi sed! Temporibus corporis quaerat in nobis.</p>
          <div className='flex mt-11 ml-[10rem] gap-16'>
            <i><AiFillLinkedin className='h-[3rem] w-[5rem]' color='#0D4451' /></i>
            <i><AiFillGithub className='h-[3rem] w-[5rem]' color='#0D4451' /></i>
            <i><AiOutlineMail className='h-[3rem] w-[5rem]' color='#0D4451' /></i>
          </div>
        </div>
      </div>
    </>
  )
};