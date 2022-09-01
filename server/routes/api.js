const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

router.get('/session/:sessionId',
  controller.getOneSession,
  (req, res) => res.status(200).json(res.locals.data)
);

router.post('/session',
  controller.createSession,
  (req, res) => {
    console.log('created new session in database');
    return res.status(200).json(res.locals.data);
  }
);

router.put('/session',
  controller.updateSession,
  (req, res) => {
    // console.log('updating session based on user input');
    return res.status(200).json('updated session');
  })

router.get('/', 
  controller.getSessions,
  (req, res) => res.status(200).json(res.locals.data)
);


module.exports = router;