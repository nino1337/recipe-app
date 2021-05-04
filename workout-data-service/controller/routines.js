const { Routine, validateRoutine } = require('../model/routine');

exports.getRoutines = async (req, res) => {
  try {
    const userId = req.user._id;
    const routines = await Routine.find({ userId }).select('-userId');

    return res.status(200).send(routines);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addRoutine = async (req, res) => {
  // validate the inputs of the user
  const { error } = validateRoutine(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // check if routine with name already exists
    if (await Routine.exists({ name: req.body.name, userId: req.user._id })) {
      return res.sendStatus(409);
    }

    const routine = new Routine({ ...req.body, userId: req.user._id });
    await routine.save();
    return res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteRoutine = async (req, res) => {
  try {
    const routine = await Routine.findOne({
      name: req.body.name,
      userId: req.user._id,
    });

    if (!routine) {
      return res.sendStatus(404);
    }
    await routine.deleteOne();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
};
