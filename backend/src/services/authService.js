const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (data) => {
 
  if (data.role === 'HR') {

    const existingHR = await User.findOne({ role: 'HR' });

    if (existingHR) {
    
      await User.findByIdAndDelete(existingHR._id);
    }
  }


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

