const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Service method to register a new user
exports.register = async (data) => {
  // Check if the new user is being registered as HR
  if (data.role === 'HR') {
    // Find existing HR user
    const existingHR = await User.findOne({ role: 'HR' });

    if (existingHR) {
      // If an HR exists, delete the existing HR
      await User.findByIdAndDelete(existingHR._id);
    }
  }

  // Create and save the new user
  const user = new User(data);
  await user.save();
  return user;
};



exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  
  return { token, role: user.role };
};

