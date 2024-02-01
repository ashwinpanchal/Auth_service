const express = require("express");

const router = express.Router();

const ApiV1Routes = require("./v1/index");

router.use("/v1", ApiV1Routes);

module.exports = router;
