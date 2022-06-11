const User = require('../models/User');
const JWT = require('jsonwebtoken');

module.exports.signup_get = (req, res) => {
  res.render('signup');
};
