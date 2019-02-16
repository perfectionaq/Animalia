const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 128,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

module.exports = UserSchema;