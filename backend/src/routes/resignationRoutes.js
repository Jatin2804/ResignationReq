const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const resignationController = require('../controllers/resignationController');


router.post('/submit', authMiddleware, roleMiddleware('Employee'), resignationController.submitResignation);
router.put('/review/:id', authMiddleware, roleMiddleware('HR'), resignationController.reviewResignation);
router.get('/all', authMiddleware, roleMiddleware('HR'), resignationController.getAllResignations);


module.exports = router;
