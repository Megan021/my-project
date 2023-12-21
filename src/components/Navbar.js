import React, { useContext } from 'react';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { FaUserCog } from 'react-icons/fa';


const Navbar = () => {

    const { state } = useContext(UserContext);

    const NavbarMenu = () => {
        if (state) {
            return (
                <>
                    <div>
                        <ul className='flex gap-11 pt-6'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-6 pt-6'>
                        <Link to="/setting" className="flex"><FaUserCog className='h-[1.9rem] ml-2' /></Link>
                        <Link to="/logout" className="flex">Logout<RiLogoutBoxRLine className='h-[1.9rem] ml-2' /></Link>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div>
                        <ul className='flex gap-11 pt-6'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-6 pt-6'>
                        <button className='h-[2.1rem] w-24 rounded-l-lg ring-2 pb-2 ring-[#F7A41B] shadow-lg text-[#0D4451] font-medium'><Link to="/jobseekersignup">Register</Link></button>
                        <Link to="/login" className="">Login</Link>

                    </div>
                </>
            )
        }
    }

    return (
        <div className='flex justify-around h-20 shadow-md content-center text-xl'>
            <div className='flex'>
                <Link to="/employerhome" className="h-auto w-12 pt-3"><img src={Logo} alt="Logo" /></Link>
                <p className='pt-6'>JobDoors</p>
            </div>
            <NavbarMenu />
        </div>
    )
}

export default Navbar