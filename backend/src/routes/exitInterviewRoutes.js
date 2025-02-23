const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const exitInterviewController = require('../controllers/exitInterviewController');

router.post('/submit', authMiddleware, exitInterviewController.submitExitInterview);
router.get('/', authMiddleware, roleMiddleware('HR'), exitInterviewController.getExitInterviews);

module.exports = router;

