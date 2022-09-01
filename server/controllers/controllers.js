const models = require('../models/models');

const controller = {};

controller.getSessions = (req, res, next) => {
  models.Session.find({})
    .exec()
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => next(err));
}

controller.createSession = (req, res, next) => {
  const {name, buttonClicked, sustain} = req.body;
  models.Session.create({name, buttonClicked, sustain})
    .then(() => next())
    .catch(err => next(err))
}


module.exports = controller;