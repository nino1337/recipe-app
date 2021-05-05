const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('combined'));

// import environmental variables from our .env file
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `${__dirname}/.env.production` });
} else {
  dotenv.config();
}

// connect to database
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch((error) => console.log(`could not connect to mongodb: ${error}`));

app.use(express.json());

// implement routes
const routes = require('./routes');

app.use('/', routes);

const port = parseInt(process.env.PORT, 10);
app.listen(port, () =>
  console.log(`workout-data-server is listening on port: ${port}`),
);

module.exports = app;
