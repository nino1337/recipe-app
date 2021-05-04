const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Exercise = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
});

const validateExercise = (exercise) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string(),
  });

  return schema.validate(exercise);
};

exports.Exercise = mongoose.model('Exercise', Exercise);
exports.validateExercise = validateExercise;
