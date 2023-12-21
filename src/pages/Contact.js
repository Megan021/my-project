import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", message: "" });

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({ ...userData, name:data.name, email:data.email });

      if (res.status !== 200) {
        const error = new Error(data.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    userContact();
  }, []);

  // storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  //send the data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData; 

    // to send data into backend
    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, message
      })
    });
    const data = await res.json();
    if(!data) {
      console.log("message not send");
    } else {
      alert("Message Send");
      setUserData({...userData, message: ""});
    }
  }

  return (
    <>
      <div>
        <h1 className='text-[3rem] text-center text-[#0D4451] mt-12'>Contact For Any Query</h1>
        <div className='flex justify-evenly mt-[4rem]'>
          <div className='inset-0 bg-gray-300'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.60764809952!2d85.29746469462127!3d27.710323714558005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1678775631984!5m2!1sen!2snp" width="600" height="450" style={{ border: "round" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='border border-black'></iframe>
          </div>
          <form method='POST'>
            <div className='h-auto w-[47rem] bg-[#0D4451] border rounded pl-6 '>
              <h2 className='text-5xl mb-7 mt-5 text-white'>Contact Form</h2>
              <div className='flex gap-7'>
                <input type="text" name="name" id='name'
                  value={userData.name}
                  onChange={handleInputs}
                  placeholder="Your Name" className='h-12 w-[21rem] border rounded border-black pl-2' />
                <input type="email" name="email" id='email'
                  value={userData.email}
                  onChange={handleInputs}
                  placeholder="Your Email" className='h-12 w-[21rem] border rounded border-black pl-2' />
              </div>
              <div>
                <textarea className='form-control ring-1 ring-black h-[8rem] w-[43.7rem] mt-8 pl-2 pt-1'
                  name="message" id='message'
                  value={userData.message}
                  onChange={handleInputs}
                  placeholder='Leave a message...' />
              </div>
              <div className='flex'>
                <button type='submit' onClick={contactForm} className='h-12 w-[21rem] bg-[#F7A41B] text-white text-[1.3rem] mt-12 rounded-r-full'>Send Message</button>
                <i><BsFillArrowLeftCircleFill className='h-10 w-auto mt-[3.3rem] mb-12 ml-6' color='white' /></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};