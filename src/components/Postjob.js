import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Postjob = () => {

    // const callPostJobPage = async () => {
    //     // const navigate = useNavigate();
    //     try {
    //         const res= await fetch('/postJobs', {
    //             method: 'GET',
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials: "include"
    //         });
    //         const data = await res.json();
    //         console.log(data);

    //         if(!res.status === 200) {
    //             const error = new Error(res.error);
    //             throw error;
    //         }

    //     } catch (err) {
    //         console.log(err);
    //         navigate('/login');
    //     }
    // }
    // useEffect(() => {
    //     callPostJobPage();
    // }, []);

    const navigate = useNavigate();
    const [jobdata, setState] = useState({
        title: "",
        company: "",
        location: "",
        skill: "",
        workType: "",
        employmentType: "",
        discription: "",
        salary: ""
    })

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        if (name === 'skill') {
          // Convert the skill string to an array of skills
          const skillArray = value.split(',').map(skill => skill.trim());
          setState({ ...jobdata, [name]: skillArray });
      } else {
          setState({ ...jobdata, [name]: value });
      }
    }

    const handleCancel = () => {
        if (window.confirm("Are you sure you want to cancel this process?")) {
          // Clear the form data
          setState({
            title: "",
            company: "",
            location: "",
            skill: "",
            workType: "",
            employmentType: "",
            discription: "",
            salary: "",
          });
    
        //   navigate('/postajob');
        }
      };

    const PostData = async(event) => {
        event.preventDefault();
        const {title,company, location, skill, workType, employmentType, discription, salary} = jobdata;
    
        const res = await fetch('/postJob', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            
          },
          body: JSON.stringify({
            title, company, location, skill, workType, employmentType, discription, salary 
          })
        });
        
        const data = await res.json();
        console.log(data);
    
        if(data.status === 400 || !data) {
          window.alert("Login to post job");
          console.log("Login to post job");
          navigate('/login');
        } else {
          const token = data.token; // Extract the token from the response
          localStorage.setItem('token', token); // Store the token in localStorage
          window.alert("Job Posted Successfully");
          console.log("Job Posted Successfully");
          navigate('/employerhome');
        }
      }

    return (
        <>
            <h2 className='text-[3rem] text-center text-[#0D4451] mt-12'>Post a Job</h2>
            <div method='POST'>
                <div className='flex justify-center mt-10'>
                    <div className='w-[50%] border border-gray-300 shadow-lg rounded'>
                        <div className='text-center'>
                            <h2 className='text-xl m-5 mr-[34rem] mt-[2.5rem]'>Job Title<span className='text-red-500'>*</span></h2>
                            <input type='text' name='title' id='title' value={jobdata.title} onChange={handleInputs} className='pl-2 w-[80%] h-10 border rounded border-gray-400 mb-4 ' placeholder=' e.g: Fullstack Developer' />
                            <h2 className='text-xl m-5 mr-[29.7rem]'>Company Name<span className='text-red-500'>*</span></h2>
                            <input type='text' name='company' id='company' value={jobdata.company} onChange={handleInputs} className='pl-2 w-[80%] h-10 border rounded border-gray-400 mb-7 ' placeholder='Enter the company name' />
                            <h2 className='text-xl ml-5 mb-5 mr-[32rem]'>Job Location<span className='text-red-500'>*</span></h2>
                            <input type='text' name='location' id='location' value={jobdata.location} onChange={handleInputs} className='pl-2 w-[80%] h-10 border rounded border-gray-400 mb-7 ' placeholder=' e.g: Kathmandu' />
                            <h2 className='text-xl ml-5 mb-5 mr-[31rem]'>Skills Requred<span className='text-red-500'>*</span></h2>
                            <input type='text' name='skill' id='skill' value={jobdata.skill} onChange={handleInputs} className='pl-2 w-[80%] h-10 border rounded border-gray-400 mb-7 ' placeholder=' e.g: Frontend' />
                            <h2 className='text-xl ml-5 mb-5 mr-[35rem]'>Salary<span className='text-red-500'>*</span></h2>
                            <input type='text' name='salary' id='salary' value={jobdata.salary} onChange={handleInputs} className='pl-2 w-[80%] h-10 border rounded border-gray-400 mb-7 ' placeholder=' e.g: Frontend' />

                            <div>
                                <label className='text-xl ml-5 mb-5 mr-[33rem]'>Work Type</label>
                                <select className='mt-[1rem] ml-[4.7rem] border rounded border-gray-400 w-[80%] h-10 pl-2 pb-1 bg-white text-black block mb-7' name='workType' onChange={handleInputs}>
                                    <option type='remote' id='remote' value="Remote" >Remote</option>
                                    <option type='On-site' id='On-site' value="On-site" >On-site</option>
                                    <option type='hybrid' id='hybrid' value="Hybrid" >Hybrid</option>
                                </select>
                            </div>


                            <div>
                                <label className='text-xl ml-5 mb-5 mr-[29rem]'>Employment Type</label>
                                <select className='mt-[1rem] ml-[4.7rem] border rounded border-gray-400 w-[80%] h-10 pl-2 pb-1 bg-white text-black block mb-7' name='employmentType' onChange={handleInputs}>
                                    <option type='fulltime' id='fulltime' value="Fulltime" >Fulltime</option>
                                    <option type='partTime' id='partTime' value="PartTime" >Part Time</option>
                                </select>
                            </div>

                            <h2 className='text-xl ml-5 mb-5 mr-[27rem]'>Discription about job<span className='text-red-500'>*</span></h2>
                            <textarea name='discription' id='discription' value={jobdata.discription} onChange={handleInputs} className='w-[80%] h-[20rem] border rounded border-gray-400 pl-2 pt-1 mb-6' placeholder='Add Job Discription...' />

                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <button className='text-[#F7A41B] border border-[#F7A41B] rounded-lg ml-[56.3rem] mt-8 h-[3rem] w-[7rem]' onClick={handleCancel}>Cancel</button>
                    <button type='submit' name='jobpost' id='jobpost' value='jobpost' onClick={PostData}className='text-white border bg-[#0D4451] rounded-lg ml-[1rem] mt-8 h-[3rem] w-[7rem]'>Continue</button>
                </div>
            </div>

            {
                /*
                blue - [#0D4451]
                yellow - [#F7A41B] 
                */
            }

        </>
    )
}

export default Postjob