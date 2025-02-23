const ExitInterview = require('../models/ExitInterview');

exports.submitExitInterview = async (employeeId, data) => {
  const exitInterview = new ExitInterview({
    employee: employeeId,
    questions: data.questions,
    answers: data.answers,
  });

  await exitInterview.save();
  return exitInterview;
};

exports.getExitInterviews = async () => {
  return await ExitInterview.find().populate('employee');
};
