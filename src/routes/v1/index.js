const express = require("express");

const UserController = require("../../controllers/user-controller");
const { AuthValidatorRequest } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthValidatorRequest.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthValidatorRequest.validateUserAuth,
  UserController.signIn
);

module.exports = router;
