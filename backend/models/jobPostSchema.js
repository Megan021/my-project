const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  skill: {
    type: [String],
    required: true
  },
  workType: {
    type: String,
    required: true
  },
  employmentType: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const JobPost = mongoose.model('JOBPOST', jobPostSchema);
module.exports = JobPost;
