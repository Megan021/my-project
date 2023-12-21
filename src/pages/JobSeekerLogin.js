import React, { useState, useContext } from 'react'
import Logo from '../images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { UserContext } from '../App';

const JobSeekerLogin = () => {
    const { dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credential");
        } else {
            dispatch({ type: "USER", payload: true })
            dispatch({ type: 'SET_USER_ROLE', payload: data.userType });
            window.alert("Login Successfully");
            navigate('/');
        }
    }
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

                <form method='POST'>
                    <div className='h-[30rem] w-[40rem] bg-white shadow-2xl border rounded-r-md'>
                        <div className='ml-[9.5rem]'>
                            <h2 className='text-4xl font-semibold mb-5 mt-9'>Job Seeker Login</h2>
                            <p className='mb-1'>Email</p>
                            <input type='email' name="name" id='name' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
                            <p className='mb-1'>Password</p>
                            <input type='password' name="name" id='name' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
                            <button type='submit' name='signin' id='signin' value='login' onClick={LoginUser} className='h-12 w-[11rem] bg-[#0D4451] text-white text-[1.3rem] pb-1 mt-9 rounded-md'>Login</button> <br />
                            <div className='mt-5 flex'>
                                <Link to='/signup' className='text-lg underline underline-offset-2'>Create an account.</Link>
                                <i><BsArrowLeftCircleFill className='h-5 w-auto ml-4 mt-1' color='#F7A41B' /></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default JobSeekerLogin