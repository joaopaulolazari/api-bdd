const Joi = require('joi');

const example = Joi.object({}).unknown(true);

module.exports = {
  example
};
