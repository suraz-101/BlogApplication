const applicationLevelMiddleware = (req, res, next) => {
  req.body.date = new Date().toLocaleDateString();
  next();
};

module.exports = { applicationLevelMiddleware };
