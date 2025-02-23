const mongoose = require('mongoose');

const ExitInterviewSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questions: [{ type: String }],
  answers: [{ type: String }],
});

const ExitInterview = mongoose.model('ExitInterview', ExitInterviewSchema);
module.exports = ExitInterview;
