const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const authResponse = await authService.login(req.body);
    res.json({ token: authResponse.token, role: authResponse.role ,data:authResponse.data});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
