const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
//const Data = mongoose.model('Data');
const Registration = mongoose.model('Registration');
const { body, validationResult } = require('express-validator/check');

router.get("/", (req, res) => {
    console.log('BLA');
});

router.post('/',
    [
      body('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
      body('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
    ],
  (req, res) => {
     const errors = validationResult(req);
    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
    } else {
        res.send(errors);
    }
  }
);


module.exports = router;
