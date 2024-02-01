const express = require("express");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();

const startServer = async () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log("Server Running on PORT", PORT);
  });
};

startServer();
