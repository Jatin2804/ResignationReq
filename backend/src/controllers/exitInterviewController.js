const exitInterviewService = require('../services/exitInterviewService');

exports.submitExitInterview = async (req, res) => {
  try {
    const exitInterview = await exitInterviewService.submitExitInterview(req.user.id, req.body);
    res.status(201).json(exitInterview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getExitInterviews = async (req, res) => {
  try {
    const interviews = await exitInterviewService.getExitInterviews();
    res.json(interviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
