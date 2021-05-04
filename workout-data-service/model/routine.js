const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Exercise = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
});

const Routine = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  exercises: {
    type: [Exercise],
    required: true,
  },
});

const validateRoutine = (routine) => {
  const exerciseSchema = Joi.object().keys({
    id: Joi.number().required(),
    sets: Joi.number().required(),
  });
  const schema = Joi.object({
    name: Joi.string().required(),
    exercises: Joi.array().items(exerciseSchema),
  });

  return schema.validate(routine);
};

exports.Routine = mongoose.model('Routine', Routine);
exports.validateRoutine = validateRoutine;
