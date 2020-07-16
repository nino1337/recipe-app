const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  User,
  validateRegistration,
  validateEmail,
  validateLogin,
} = require("../model/user");

exports.registration = async (req, res) => {
  // validate the inputs of the user
  const { error } = validateRegistration(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // check if user with email already exists
    if (await User.exists({ email: req.body.email })) {
      return res.status(409);
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    const savedUser = await user.save();
    return res.redirect("/login");
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.sendStatus(404);
    }

    await user.deleteOne();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
};

exports.login = async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.sendStatus(400);
    }

    // check if password is valid
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.sendStatus(400);
    }

    // generate token
    const token = jwt.sign({ ...user }, process.env.SECRET, {
      expiresIn: "12h",
    });
    // redirect to main page
    res.header("auth-token", token).sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

exports.logout = (req, res) => {
  res.sendStatus(200);
};
