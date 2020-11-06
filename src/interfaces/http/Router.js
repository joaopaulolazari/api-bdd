const { exampleAction } = require('./controllers/ExampleController');

module.exports = app => {
  // MapCoordinates Routes
  app.get('/api/example', exampleAction);
};
