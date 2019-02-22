const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Data = mongoose.model('Data');
const Registration = mongoose.model('Registration');
const { body, validationResult } = require('express-validator/check');



router.post('/blog-post',    [
      body('title')
        .isLength({ min: 1 })
        .withMessage('Please enter a title'),
      body('text')
        .isLength({ min: 1 })
        .withMessage('Please enter a text'),
    ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const data = new Data(req.body);
      data.save()
        .then(() => {res.send('Your post saved!');})
        .catch((err) => { res.send('Sorry! Something went wrong.'); });
    } else {
        res.send(errors);
    }
  }
);


router.post('/',    [
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
        .then(() => {
            return res.status(200).json({
            success:true,
            redirectUrl: '/blog-post'
        }) })
        .catch((err) => { res.send('Sorry! Something went wrong.'); });
    } else {
        res.send(errors);
    }
  }
);


module.exports = router;
