const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();

// import environmental variables from our local.env file
require("dotenv").config({ path: "local.env" });

//connect to mongodb

// set static path
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// set routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});

module.exports = app;
