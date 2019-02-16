const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

module.exports = router;