import React from 'react';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex justify-around h-20 shadow-xl content-center text-xl'>
            <div className='flex'>
            <Link to="/" className="h-auto w-12 pt-3"><img src={Logo} alt="Logo"/></Link>
            <p className='pt-6'>JobDoors</p>
            </div>
            <div>
                <ul className='flex gap-11 pt-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='flex gap-6 pt-6'>
                <button className='h-[2.1rem] w-24 rounded-l-lg ring-2 pb-2 ring-[#F7A41B] shadow-lg text-[#0D4451] font-medium'><Link to="/signup">Sign Up</Link></button>
                <Link to="/postajob" className="postjob">Post a Job</Link>
            </div>
        </div>
    )
}

export default Navbar