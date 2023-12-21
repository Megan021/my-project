const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');
const JobAuthenticate = require('../middleware/jobAuthenitcate');

require('../db/connection.js');
const User = require('../models/userSchema.js');
const Employer = require('../models/employerSchema');
const JobPost = require('../models/jobPostSchema');

// Using Promises 

// router.post('/register', (req, res) => {
//     const {name, email, password} = req.body;
//     if(!name || !email || !password) {
//         return res.status(422).json('please fill all required fields');
//     }
//     User.findOne({email: email})
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json('Email already exists');
//         }
//         const user = new User({name, email, password});
//         user.save().then(() => {
//             res.status(201).json({message: 'User saved successfully'});
//         }).catch((err) => {
//             res.status(500).json({message: 'Failed to create user'});
//         })
//     }).catch((err) => {console.log(err)});
// });


// Using Async-Await

router.post('/jobseekersignup', async (req, res) => {
    const { name, email, password, skill, role } = req.body;

    if (!name || !email || !password || !skill || !role) {
        return res.status(422).json({ error: 'Please fill all required fields' });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'User already exists' });
        } else {
            const skillsArray = Array.isArray(skill) ? skill : [skill];
            const user = new User({ name, email, password, role, skill: skillsArray });

            await user.save();
            res.status(201).json({ message: 'New User created Successfully' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// //Employer register
router.post('/employersignup', async (req, res) => {
    const { name, email, password, role} = req.body;

    if (!name || !email || !password || !role) {
        return res.status(422).json({ error: 'Please fill all required fields' });
    }
    try {
        const userExist = await Employer.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'User already exists' });
        } else {
            const employer = new Employer({ name, email, password, role});

            await employer.save();
            res.status(201).json({ message: 'New User created Successfully' });
        }
    } catch (err) {
        console.log(err);
    }
});


// Login Route for jobseeker
router.post('/signin', async (req, res) => {
    try { 
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Please fill the data' });
        }
        const userLogin = await User.findOne({ email: email });
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (err) {
        console.log(err);
    }
});

//Employer Login
router.post('/employersignin', async (req, res) => {
    try { 
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Please fill the data' });
        }
        const employerLogin = await Employer.findOne({ email: email });
        if (employerLogin) {
            const isMatch = await bcrypt.compare(password, employerLogin.password);

            token = await employerLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }
});

//Post Job Route page
router.get('/about', authenticate, (req,res) => {
    console.log('Hello user Page');
    res.send(req.rootUser);
})

// Edit job post 
router.put('/editProfile', authenticate, async (req, res) => {
    const { name, email, skill } = req.body;
    const userId = req.userID; // Assuming you have authentication middleware that sets req.user
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.name = name || user.name;
      user.email = email || user.email;
      user.skill = skill || user.skill;
  
      const updatedUser = await user.save();
      console.log("enter");

      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user profile' });
    }
  });

  router.put('/editJob:id', async (req, res) => {
    const jobId = req.params.id;
    const {
      title,
      skill,
      workType,
      salary,
      discription
    } = req.body;
  
    try {
      const updatedJob = await JobPost.findByIdAndUpdate(
        jobId,
        {
          title,
          skill,
          workType,
          salary,
          discription
        },
        { new: true }
      );
  
      if (!updatedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      res.json(updatedJob);
    } catch (error) {
      console.error('Error updating job:', error);
      res.status(500).json({ error: 'Failed to update job' });
    }
  });

//Get user data Route page
router.get('/getdata', authenticate, (req,res) => {
    console.log('Hello user Page');
    res.send(req.rootUser);
})

router.post('/contact', authenticate, async (req,res) => {
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message) {
            console.log("Error in contact from");
            return res.json({error: "Please fill the required form."});
        }
        const userContact = await User.findOne({_id: req.userID});

        if(userContact) {
            const userMessage = await userContact.addMessage(name,email,message);

            await userContact.save();

            res.status(201).json({message: "Message Send Successfully"});
        }
    } catch (error) {
        console.log(error);
    }
});

//Logout Route page
router.get('/logout', (req,res) => {
    console.log('Hello Logout Page');
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');
})


//   API route for searching job posts by title
router.get('/searchjob/:keyword', async (req, res) => {
    const keyword = req.params.keyword;
  
    try {
      const searchResult = await JobPost.find({ title: { $regex: keyword, $options: 'i' } });
  
      res.json(searchResult);
    } catch (error) {
      console.error('Error occurred during search:', error);
      res.status(500).json({ error: 'Error occurred during search.' });
    }
  });
  

module.exports = router;