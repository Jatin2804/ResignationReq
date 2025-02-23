const validator = require('validator');

exports.validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email address.');
  }
};

exports.validatePassword = (password) => {
  if (!validator.isLength(password, { min: 6 })) {
    throw new Error('Password must be at least 6 characters long.');
  }
};
