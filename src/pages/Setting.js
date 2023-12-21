import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditClick = () => {
    setEditedUserData({
      name: userData.name,
      email: userData.email,
      skill: userData.skill ? userData.skill.join(', ') : ''
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveClick = async () => {
    try {
      // Convert skill to an array if provided
      const skillsArray = editedUserData.skill
        ? editedUserData.skill.split(',').map(skill => skill.trim())
        : [];

      const res = await fetch('/editProfile', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          name: editedUserData.name,
          email: editedUserData.email,
          skill: skillsArray
        })
      });

      const data = await res.json();
      console.log(data);
      setUserData(data); // Update displayed data
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };


  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (res.status !== 200) {
        const error = new Error(data.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div>
        <h2 className='text-[3rem] text-center text-[#0D4451] mt-12 mb-9'>User Profile</h2>
        <div className='flex justify-around w-[50%] m-auto shadow-md shadow-gray-400 rounded-md'>
          <div className='flex p-10 items-center'>
            <FaUserCircle className='h-[8rem] w-[8rem] text-[#0D4451]' />
          </div>
          <div className='p-10 w-[60%] leading-[2.5rem]'>
            {isEditing ? (
              <>
                <input
                  type='text'
                  name='name'
                  value={editedUserData.name}
                  onChange={handleInputChange}
                  className='mb-2 p-1 border border-gray-400 rounded-md w-[24rem]'
                />
                <input
                  type='email'
                  name='email'
                  value={editedUserData.email}
                  onChange={handleInputChange}
                  className='mb-2 p-1 border border-gray-400 rounded-md w-[24rem]'
                />
                <input
                  type='text'
                  name='skill'
                  value={editedUserData.skill}
                  onChange={handleInputChange}
                  className='mb-2 p-1 border border-gray-400 rounded-md w-[24rem]'
                  placeholder='Skills (comma-separated)'
                />
                <button
                  className='bg-[#F7A41B] text-white px-4 rounded-md mt-2 ml-[20rem]'
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h3 className='text-white text-center bg-[#F7A41B] border rounded-lg mb-5 mr-2'>Id: {userData._id}</h3>
                <h3 className='text-lg'>Name: {userData.name}</h3>
                <h3 className='text-lg'>Email: {userData.email}</h3>
                <p className='text-lg'>Skills: {userData.skill && userData.skill.join(', ')}</p>
              </>
            )}
          </div>
        </div>
        <button
          className='bg-[#0D4451] text-white py-2 px-4 rounded-md mt-4 ml-[64.5rem]'
          onClick={() => handleEditClick()}
        >
          Edit Profile
        </button>
      </div>

    </>
  )
}

export default Setting