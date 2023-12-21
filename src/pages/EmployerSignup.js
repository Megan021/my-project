import React, { useState } from 'react';
import Logo from '../images/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const EmployerSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');

  const handleInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'role':
        setRole(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };


  const PostData = async (event) => {
    event.preventDefault();

    // Check if any of the required fields are empty
    if (!name || !email || !password || !role) {
      window.alert('Invalid registration');
      console.log('Invalid registration');
      return;
    }

    const res = await fetch('/employersignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role
      }),
    });

    const data = await res.json();

    if (!data || data.status === 422) {
      window.alert('Invalid registration');
      console.log('Invalid registration');
    } else {
      window.alert('Registration Successful');
      console.log('Registration Successful');
      navigate('/employerlogin');
    }
  };

  return (
    <>
      <div className='flex mt-10 justify-center'>
        <div className='h-[35rem] w-[25rem] bg-[#0D4451] flex items-center border rounded-l-md shadow-2xl'>
          <div>
            <img className='h-[8rem] w-[auto] pl-[8.4rem]' src={Logo} alt="Logo Img" /><br />
            <h2 className='text-white text-3xl text-center'>JobDoors</h2>
            <p className='text-center text-white p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, esse.</p>
          </div>
        </div>


        <form method='POST'>
          <div className='h-[35rem] w-[40rem] bg-white shadow-xl border border-gray-300 rounded-r-md'>
            <div className='ml-[9.5rem]'>
              <h2 className='text-4xl font-semibold mb-5 mt-9'>Admin Register</h2>
              <p className='mb-1'>Name</p>
              <input type='text' name="name" id='name' placeholder='Enter Name' value={name} onChange={handleInputs} className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
              <p className='mb-1'>Email</p>
              <input type='email' name="email" id='email' placeholder='Enter Email' value={email} onChange={handleInputs} className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
              <p className='mb-1'>Password</p>
              <input type='password' name="password" id='password' value={password} onChange={handleInputs} placeholder='Create Password' className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5' />
              <br />

              {/* <div>
              <p className='mb-1'>Skill</p>
              <input type='text' name='skill' id='skill' placeholder='Add your skill' value={skill} onChange={handleInputs} className='h-12 w-[21rem] border rounded border-gray-400 pl-2 mb-5'/>
            </div>

            <div>
              <label>Choose who you are</label>
              <select className='mt-[1rem] border rounded border-gray-400 h-12 w-[21rem] pl-2 pb-1 bg-blue-100 text-black block' name='userType' onChange={handleInputs}>
                <option type='employer' id='employer' value="employer" >Employer</option>
                <option type='jobseeker' id='jobseeker' value="jobseeker" >Jobseeker</option>
              </select>
            </div> */}

              <button type='submit' name='signup' id='signup' value='register' className='h-12 w-[11rem] bg-[#0D4451] text-white text-[1.3rem] pb-1 mt-9 rounded-md mb-1' onClick={PostData}>Sign Up</button> <br />
              <div className='mt-5 flex'>
                <Link to='/employerlogin' className='text-lg underline underline-offset-2'>Already have an account ?</Link>
                <i><BsArrowLeftCircleFill className='h-5 w-auto ml-4 mt-1' color='#F7A41B' /></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EmployerSignup