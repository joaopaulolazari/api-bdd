const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExampleSchema = new Schema({
  test: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ExampleModel', ExampleSchema);
