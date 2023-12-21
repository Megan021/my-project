const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobPost'
  },
  name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      approved: {
        type: Boolean,
        default: false,
      }

});

module.exports = mongoose.model('Application', applicationSchema);

