const mongoose = require('mongoose');
const UserSchema = require('./schemas/UserSchema');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User', UserSchema);

User.generateToken = async (user) => {
  const {name, mobile} = user
  const token = await jwt.sign({name, mobile}, 'pvtKey', {algorithm: 'RS256'});
  if(token) {
    return token;
  } else {
    return null;
  }
}
module.export = User; 
