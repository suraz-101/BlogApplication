const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  role: Joi.array().items(Joi.string().valid("user", "admin")),
  gender: Joi.string().required(),
  profilePic: Joi.string(),
});

const resetSchema = Joi.object({
  id: Joi.string().required(),
  newPassword: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required(),
});

const loginSchena = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const updateUserSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string(),
  phoneNumber: Joi.number(),
});

const changePass = Joi.object({
  userId: Joi.string().required(),
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});

const changePasswordValidation = (req, res, next) => {
  const { error } = changePass.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);

  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

const resetValidate = (req, res, next) => {
  const { error } = resetSchema.validate(req.body);
  error ? res.status(200).json({ message: error.details[0].message }) : next();
};

const loginValidate = (req, res, next) => {
  const { error } = loginSchena.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

const userUpdateVlaidation = (req, res, next) => {
  const { error } = updateUserSchema.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = {
  validate,
  resetValidate,
  loginValidate,
  userUpdateVlaidation,
  changePasswordValidation,
};
