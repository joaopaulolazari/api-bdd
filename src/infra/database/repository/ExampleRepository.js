const mongoose = require('mongoose');

const ExampleModel = mongoose.model('ExampleModel');

const count = async () => {
  const countDoc = await ExampleModel.countDocuments();
  return countDoc;
};

module.exports = {
  count
};
