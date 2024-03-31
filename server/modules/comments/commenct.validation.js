const Joi = require("joi");

const Schema = Joi.object({
  comment: Joi.string().required(),
  postedBy: Joi.string().required(),
  postedTo: Joi.string().required(),
});

const validation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = { validation };
