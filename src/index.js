const express = require("express");

const { PORT } = require("./config/serverConfig");

const app = express();

const startServer = async () => {
  app.listen(PORT, () => {
    console.log("Server Running on PORT", PORT);
  });
};

startServer();
