const express = require("express");
// const sequelize = require("sequelize");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
// const db = require("./models/index");

const app = express();

const startServer = async () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    // if (process.env.DB_SYNC) {
    //   await db.sequelize.sync({ alter: true });
    // }
    console.log("Server Running on PORT", PORT);
  });
};

startServer();
