const { model } = require('mongoose');
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

controller.getOneSession = (req, res, next) => {
  const { sessionId } = req.params;
  models.Session.findOne({_id: sessionId})
    .exec()
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => next(err));
}

controller.createSession = (req, res, next) => {
  const {buttonClicked, sustain} = req.body;
  models.Session.create({buttonClicked, sustain})
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch(err => next(err))
}

controller.updateSession = (req, res, next) => {
  const {_id, change} = req.body;
  models.Session.updateOne({_id}, change)
    .then(() => next())
    .catch(err => next(err))
}


module.exports = controller;