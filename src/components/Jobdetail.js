import React from 'react'
import CompanyLogo from '../images/companylogo.jpg'
import { RxTriangleRight } from 'react-icons/rx'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export const Jobdetail = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex items-center h-[15rem] w-[80%] mt-14 border border-gray-300 rounded'>
          <div className='flex justify-around'>
            <div>
              <img src={CompanyLogo} className='h-auto w-[25rem]' />
            </div>
            <div>
              <h2 className='text-4xl mb-3'>Job Title</h2>
              <button className='h-7 w-20 text-white bg-[#0D4451] border rounded-lg mb-5 mr-2'>Full Time</button>
              <p className='pr-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum excepturi omnis ab odit amet magni architecto a delectus reiciendis earum? Ipsa voluptatum eaque necessitatibus et? Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-[9.4rem]'>
        <div className='flex h-auto w-[60%] mt-14 border border-gray-300 rounded'>
          <div className='pl-5 pr-5 pt-5 space-y-5'>
            <h2 className='text-3xl font-medium'>Job Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque alias ullam nisi laborum corporis! Officia corporis sapiente itaque corrupti natus, suscipit, quae tempore rem, necessitatibus perspiciatis voluptas et amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dicta recusandae enim esse repellendus eius, voluptatibus natus sed veritatis consectetur excepturi atque, tempora cumque temporibus soluta nesciunt? Nulla, est distinctio?</p>
            <h2 className='text-3xl font-medium'>Responsibility</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto inventore ex deserunt blanditiis rerum iure, reiciendis, totam dolorem repellat eveniet doloremque aut in? Nulla debitis inventore dolorum laboriosam ullam numquam.</p>
            <ul className='space-y-3'>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
            </ul>
            <h2 className='text-3xl font-medium'>Qualifications</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto inventore ex deserunt blanditiis rerum iure, reiciendis, totam dolorem repellat eveniet doloremque aut in? Nulla debitis inventore dolorum laboriosam ullam numquam.</p>
            <ul className='space-y-3 pb-6'>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
              <li className='flex'><RxTriangleRight className='mr-3 mt-[0.4rem]' />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ipsam.</li>
            </ul>
            <div className='h-auto w-[47rem] border rounded pl-6 pb-6 ml-4 mb-6'>
              <h2 className='text-3xl font-semibold mb-7 mt-3'>Apply for the Job</h2>
              <div className='flex gap-1'>
                <input type="text" name="name" id='name' placeholder="Your Name" className='h-12 w-[22rem] border rounded border-gray-300 pl-2 mb-2' />
                <input type="email" name="email" id='email' placeholder="Your Email" className='h-12 w-[22rem] border rounded border-gray-300 pl-2' />
              </div>
              <div className='flex gap-1'>
                <input type="text" name="name" id='name' placeholder="Portfolio Website" className='h-12 w-[22rem] border rounded border-gray-300 pl-2' />
                <input type="file" name="email" id="formFile" placeholder="Choose File" className='h-12 w-[22rem] border rounded border-gray-300 pl-2 pt-2' />
              </div>

              <div className='flex'>
                <button className='h-12 w-[21rem] bg-[#F7A41B] text-white text-[1.3rem] mt-12 pb-2 rounded-full'>Apply Now</button>
                <i><BsFillArrowLeftCircleFill className='h-10 w-auto mt-[3.3rem] ml-6' color='white' /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
