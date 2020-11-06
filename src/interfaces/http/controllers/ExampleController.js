const { action } = require('../../../app/services/ExampleService');

const exampleAction = async (req, res) => {
  try {
    const result = await action(req.body);
    res.json({ data: result });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  exampleAction
};
