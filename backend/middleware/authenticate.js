const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
// const Employer = require('../models/employerSchema');

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});
        // const rootUser2 = await Employer.findOne({_id:verifyToken._id, "tokens.token":token});

        if (!rootUser) { throw new Error('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        // req.rootUser2 = rootUser2;
        // req.userID2 = rootUser2._id;

        next();

    } catch (err) {
        res.status(401).send('Unauthorized');
        console.log(err);
    }
}

module.exports = Authenticate;




  