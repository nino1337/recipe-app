const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')();
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();

// import environmental variables from our local.env file
require('dotenv').config();

// connect to mongodb
mongoose
    .connect(process.env.DB_HOST, {
        auth: {
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connected to mongodb '))
    .catch((error) => console.log(`could not connect to mongodb: ${error}`));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(cors);

// set routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
});

module.exports = app;
