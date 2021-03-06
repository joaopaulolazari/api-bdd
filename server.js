const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// eslint-disable-next-line no-unused-vars
const ExampleModel = require('./src/infra/database/models/ExampleModel');
// created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://root:root@mongo:27017/ExampleModel?authSource=admin&w=1', {
    auth: { authdb: 'admin' },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .catch(err => {
    console.log('Unable to connect', err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

const routes = require('./src/interfaces/http/Router');
// importing route
routes(app); // register the route

app.listen(port, () => {
  console.log(`Node.js + MongoDB RESTful API server started on: ${port}`);
});
