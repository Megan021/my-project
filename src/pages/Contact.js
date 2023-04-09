import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export const Contact = () => {
    console.error('Helo');
    return (
        <>
            <div>
                <h1 className='text-center text-[3rem] text-[#0D4451] mt-12'>Contact For Any Query</h1>
                <div className='flex justify-evenly mt-[4rem]'>
                    <div className='inset-0 bg-gray-300'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.60764809952!2d85.29746469462127!3d27.710323714558005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1678775631984!5m2!1sen!2snp" width="600" height="450" style={{ border: "round" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border border-black'></iframe>
                    </div>
                    <div className='h-auto w-[47rem] bg-[#0D4451] border rounded pl-6 '>
                        <h2 className='text-5xl mb-7 mt-3 text-white'>Contact Form</h2>
                        <div className='flex gap-7'>
                            <input type="text" name="name" id='name' placeholder="Your Name" className='h-12 w-[21rem] border rounded border-black pl-2' />
                            <input type="email" name="email" id='email' placeholder="Your Email" className='h-12 w-[21rem] border rounded border-black pl-2' />
                        </div>
                        <div>
                            <textarea className='form-control ring-1 ring-black h-[8rem] w-[43.7rem] mt-8 pl-2 pt-1' placeholder='Leave a message...' id='message' />
                        </div>
                        <div className='flex'>
                            <button className='h-12 w-[21rem] bg-[#F7A41B] text-white text-[1.3rem] mt-12 rounded-r-full'>Send Message</button>
                            <i><BsFillArrowLeftCircleFill className='h-10 w-auto mt-[3.3rem] ml-6' color='white'/></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};