const config = require('config');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const privateKey = config.get("private_key");

const UserSchema = new mongoose.Schema({
  name: {
    type      : String,
    required  : true,
    min       : 4,
    max       : 128,
  },
  mobile: {
    type      : String,
    unique    : true,
    required  : true,
    minlength : 10,
    maxlength : 10,
  },
  password: {
    type      : String,
    required  : true,
    minlength : 6,
    maxlength : 1024,
  },
});

UserSchema.methods.generateToken = () => {
  const token = jwt.sign({_id: this._id, name: this.name, mobile: this.mobile}, privateKey);
  return token;
};

module.exports = UserSchema;