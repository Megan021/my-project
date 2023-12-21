const jwt = require('jsonwebtoken');
const JobPost = require('../models/jobPostSchema');


const JobAuthenticate = async (req, res, next) => {
    try {
        // const token = req.cookies.jwtoken;
        // const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await JobPost.findOne();

        if (!rootUser) { throw new Error('User not found') }

        // req.token = token;
        req.rootUser = rootUser;
        req.userJobID = rootUser._id;


        next();

    } catch (err) {
        res.status(401).send('Unauthorized');
        console.log(err);
    }
}

module.exports = JobAuthenticate;