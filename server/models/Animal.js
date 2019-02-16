const mongoose = require('mongoose');
const AnimalSchema = require('./schemas/AnimalSchema');

const Animal = mongoose.model('Animal', AnimalSchema);

exports.Animal = Animal;
