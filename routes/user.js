const express = require("express");
const router = express.Router();

router.post("/registration", (req, res) => {
  console.log("registration");
});

router.post("/login", (req, res) => {
  console.log("login");
});

router.post("/logout", (req, res) => {
  console.log("logout");
});

module.exports = router;
