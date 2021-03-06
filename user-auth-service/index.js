const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(morgan('combined'));

// import environmental variables from our .env file
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: `${__dirname}/.env.production` });
} else {
  dotenv.config();
}

// connect to mongodb
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongodb'))
  .catch((error) => console.log(`could not connect to mongodb: ${error}`));

app.use(express.json());

// set routes
app.use('/', routes);

const port = parseInt(process.env.PORT, 10);
app.listen(port, () => {
  console.log(`user-auth-service listening on port: ${port}`);
});

module.exports = app;
