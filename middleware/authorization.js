const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.body.token || req.headers.authorization;
  if (!token) return res.status(404).send("No access token provided.");

  try {
    // extract token from bearer token
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Access token is not valid.");
  }
};
