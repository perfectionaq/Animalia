const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 256,
  },
  type: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  //Age is currently in years
  age: {
    type: Number,
    required: false,
    min: 0,
    max: 1000,
  },
  /* TODO: make a custom type */
  breed: {
    type: String,
    required: false,
  },
  /* TODO: make a custom type 
     * 0 is adoption (has current home)
     * 1 is lost
     * 2 fostered
  */
  animalStatus: {
    type: Number,
    required: true,
    min: 0,
    max: 3,
  },
  /* TODO: make a custom type 
     * 0 adopted
     * 1 available for adoption
  */
  status: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
});

module.exports = AnimalSchema;