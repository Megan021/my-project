import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const JobApplication = () => {
    const [applications, setApplications] = useState([]);

    // Fetch job applications on component mount
    useEffect(() => {
        fetchJobApplications();
    }, []);

    const fetchJobApplications = async () => {
        try {
            const response = await fetch('/fetchJobApplications');
            const data = await response.json();
            setApplications(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching job applications:', error);
        }
    };

    const handleApprove = async (applicationId) => {
        try {
            // Send a request to update the status of the application to 'Approved'
            await fetch(`/approveApplication/${applicationId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Fetch updated job applications
            fetchJobApplications();
        } catch (error) {
            console.error('Error approving application:', error);
        }
    };

    const handleDelete = async (applicationId) => {
        try {
            // Send a request to delete the application
            await fetch(`/deleteApplication/${applicationId}`, {
                method: 'DELETE',
            });

            // Fetch updated job applications
            fetchJobApplications();
        } catch (error) {
            console.error('Error deleting application:', error);
        }
    };

    return (
        <>
            <div className='m-9'>
                <h2 className='text-[3rem] text-center text-[#0D4451] mb-12'>Job Applications</h2>
                <ul>
                    {applications.map((application) => (
                        <li key={application._id} className='border-b border-gray-300 py-2 flex justify-between w-[60%] m-auto'>
                            <div>
                                <p className='font-bold'>{application.name}</p>
                                <p className='text-gray-600'>{application.email}</p>
                            </div>
                            <div className='flex'>
                                {application.approved && (
                                    <div className='text-green-500 mt-4 mr-1'>
                                        <FaCheck />
                                    </div>
                                )}
                                <button
                                    className='text-green-500 mr-4'
                                    onClick={() => handleApprove(application._id)}
                                >
                                    Approve
                                </button>
                                <button
                                    className='text-red-500'
                                    onClick={() => handleDelete(application._id)}
                                >
                                    Delete
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default JobApplication