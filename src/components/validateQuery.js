const Joi = require("joi");

async function validateZip(zip) {
  const schema = Joi.object({
    zip: Joi.string().required().min(5).max(11),
  });

  return schema.validate(zip);
}

module.exports.validate = validateZip;
