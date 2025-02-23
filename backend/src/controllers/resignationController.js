const resignationService = require('../services/resignationService');

exports.submitResignation = async (req, res) => {
  try {
    console.log("Check")
    const resignation = await resignationService.submitResignation(req.user.id, req.body);
    res.status(201).json(resignation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.reviewResignation = async (req, res) => {
  try {
    const updatedResignation = await resignationService.reviewResignation(req.params.id, req.body);
    res.json(updatedResignation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
