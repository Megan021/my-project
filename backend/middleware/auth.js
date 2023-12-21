const jwt = require('jsonwebtoken');
const Employer = require('../models/employerSchema');

const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const employer = await Employer.findOne({ _id: decoded._id, 'tokens.token': token });
  
      if (!employer) {
        throw new Error();
      }
  
      req.token = token;
      req.employer = employer;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Authentication failed' });
    }
  };
  
  module.exports = auth;

