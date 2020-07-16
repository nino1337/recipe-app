const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authorization = require("../middleware/authorization");

router.post("/registration", userController.registration);

router.post("/delete", authorization, userController.deleteUser);

router.post("/login", userController.login);

router.post("/logout", authorization, userController.logout);

module.exports = router;
