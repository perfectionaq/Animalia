const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (request, response) => {
  const users = await User.find();
  if(users) {
    return users.length
      ? response.send(users)
      : response.status(404).send('No users found');
  } else {
    return response.status(400).send('Bad request');
  }
});

router.post('/', async (request, response) => {
  const hashedPassword = await bcrypt.hash(request.body.password, await bcrypt.genSalt(10));
  let user = new User({
    name      : request.body.name,
    mobile    : request.body.mobile,
    password  : hashedPassword,
  });
  if(user) {
    user = await user.save();
    const token = user.generateToken();
    return user && token 
      ? response.send(token) 
      : response.status(500).send('Internal Error');
  } else {
    return response.status(400).send('Bad request');
  }
});

module.exports = router;