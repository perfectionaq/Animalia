const express = require('express');
const Animal  = require('../models/Animal');

const router  = express.Router();

router.get('/', async (request, response) => {
  const animals = await Animal.find();
  if(animals) {
    return animals.length
      ? response.send(animals)
      : response.status(404).send('No Animals Found');
  } else {
    response.status(500).send('Internal Error');
  }
});

router.get('/:id', async (request, response) => {

});

router.post('/', async (request, response) => {
  const animal = new Animal({
    name          : request.body.name,
    type          : request.body.type,
    breed         : request.body.breed,
    age           : request.body.age,
    status        : request.body.status,
    animalStatus  : request.body.animalStatus,
  });
  
  const result = await animal.save();
  
  result 
    ? response.send(result)
    : response.status(400).send('Could not add animal');
});

module.exports = router;