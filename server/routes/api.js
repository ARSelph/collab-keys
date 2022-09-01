const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/', 
  controller.getSessions,
  (req, res) => res.status(200).json(res.locals.data)
);

router.post('/session',
  controller.createSession,
  (req, res) => {
    console.log('created new session in database');
    return res.status(200).json('created a new session');
  })


module.exports = router;