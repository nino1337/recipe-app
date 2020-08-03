const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('combined'));
// import environmental variables from our local.env file
dotenv.config();

const port = parseInt(process.env.PORT, 10);
app.listen(port, () =>
  console.log(`workout-data-server is listening on port: ${port}`),
);

module.exports = app;
