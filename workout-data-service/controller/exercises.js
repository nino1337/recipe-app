const { Exercise, validateExercise } = require('../model/exercise');

exports.getExercises = async (req, res) => {
  try {
    const userId = req.user._id;
    const routines = await Exercise.find({ userId }).select('-userId');

    return res.status(200).send(routines);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addExercise = async (req, res) => {
  // validate the inputs of the user
  const { error } = validateExercise(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // check if exercise with name already exists
    if (await Exercise.exists({ name: req.body.name, userId: req.user._id })) {
      return res.sendStatus(409);
    }

    const exercise = new Exercise({ ...req.body, userId: req.user._id });
    await exercise.save();
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({
      name: req.body.name,
      userId: req.user._id,
    });

    if (!exercise) {
      return res.sendStatus(404);
    }
    await exercise.deleteOne();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
};
