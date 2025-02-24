const resignationService = require('../services/resignationService');


exports.submitResignation = async (req, res) => {
  try {
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


exports.getAllResignations = async (req, res) => {
  try {
    const resignations = await resignationService.getAllResignations();
    res.json(resignations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResignationsByEmployer = async (req, res) => {
  try {
    const resignations = await resignationService.getResignationsByEmployer(req.user.id);
    res.json(resignations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

