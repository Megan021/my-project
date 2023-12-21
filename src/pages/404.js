import React from 'react'
import { BiError } from 'react-icons/bi'
import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div className='justify-center text-center'>
            <div className='flex justify-center'>
                <i><BiError className='h-[6rem] w-auto mt-10' color='#F7A41B' /></i><br />
            </div>
            <div className='flex justify-center'>
                <i><TbError404 className='h-[9rem] w-auto' color='#0D4451'/></i><br />
            </div>
            <h1 className='text-4xl font-bold text-[#0D4451] mb-2'>Page Not Found</h1><br />
            
            <p className='text-[#0D4451] font-semibold mb-5 text-lg'>We’re sorry, the page you have looked for does not exist in our website!<br /> Maybe go to our home page or try to use a search?</p><br />
            <Link to='/login'><button className='h-12 w-80 bg-[#F7A41B] text-white font-medium'>Go to Login Page</button></Link>
        </div>
    )
}

