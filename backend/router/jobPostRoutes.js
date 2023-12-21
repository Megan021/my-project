const express = require('express');
const router = express.Router();
const Application = require('../models/jobApplicationSchema');
const authenticate = require('../middleware/authenticate');

// const auth = require('../middleware/auth');


require('../db/connection.js');
const JobPost = require('../models/jobPostSchema');


// Route to Post job listings (only accessible to employers)
router.post('/postJob', async (req, res) => {
  const { title, company, location, skill, workType, employmentType, discription, salary } = req.body;

  if (!title || !company || !location || !skill || !workType || !employmentType || !discription || !salary) {
    return res.status(422).json({ error: 'Please fill all required fields' });
  }

  // Check if skill is an array or string
  let skillArray;
  if (Array.isArray(skill)) {
    // If it's already an array, use it as is
    skillArray = skill;
  } else if (typeof skill === 'string') {
    // If it's a string, convert it to an array
    skillArray = [skill];
  } else {
    return res.status(422).json({ error: 'Invalid skill data. Skill must be a string or an array of strings' });
  }

  try {
    const jobPost = new JobPost({ title, company, location, skill: skillArray, workType, employmentType, discription, salary});
    await jobPost.save();
    res.status(201).json({ message: 'Job Posted Successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to create job post. Please try again later.' });
  }
});


// Route to Post job listings
router.get('/joblist', async (req, res) => {
  try {
    const jobs = await JobPost.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch jobs from the database' });
  }
});


// Route to Get a specific job detail based on jobId
router.get('/joblist/:jobId', async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const job = await JobPost.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the job detail' });
  }
});

router.put('/updatejob/:jobID', async (req, res) => {
  try {
    const { jobID } = req.params;
    const updatedJob = req.body;

    const job = await JobPost.findByIdAndUpdate(jobID, updatedJob, { new: true });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    return res.json(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/deletejob/:jobID', async (req, res) => {
  try {
    const { jobID } = req.params;

    const deletedJob = await JobPost.findByIdAndDelete(jobID);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    return res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update application approval status
router.put('/approveApplication/:applicationId', async (req, res) => {
  try {
    const { applicationId } = req.params;

    const application = await Application.findByIdAndUpdate(
      applicationId,
      { approved: true },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    return res.json(application);
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete application
router.delete('/deleteApplication/:applicationId', async (req, res) => {
  try {
    const { applicationId } = req.params;

    const deletedApplication = await Application.findByIdAndDelete(applicationId);

    if (!deletedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }

    return res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch job applications
router.get('/fetchJobApplications', async (req, res) => {
  try {
      const applications = await Application.find();
      res.status(200).json(applications);
  } catch (error) {
      console.error('Error fetching job applications:', error);
      res.status(500).json({ error: 'An error occurred while fetching job applications.' });
  }
});

// Apply for a job
router.post('/apply', authenticate, async (req, res) => {
  
  const { name, email, jobId } = req.body; // Include jobId in the request body
  
  try {
    // Create a new application instance using the Application model
    const newApplication = new Application({
      jobId: jobId,
      name: name,
      email: email,
      // You might want to include more fields here depending on your schema
    });

    // Save the application to the database
    const savedApplication = await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully', application: savedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during application submission.' });
  }
});


module.exports = router;
