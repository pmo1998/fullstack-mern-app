const mongoose = require('mongoose');
const Registration = mongoose.model('Registration');
const { body, validationResult } = require('express-validator/check');

exports.validate=()=>{
  return [
      body('name')
        .isLength({ min:1 }).withMessage('Name is a required field.')
        .isAlpha().withMessage('Invalid name.'),
      body('email')
        .isLength({ min:1 }).withMessage('Email is a required field.')
        .isEmail().withMessage('Invalid email.'),
    ]
}

exports.createRegistration=(req,res,next)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
      .then(() => {
            return res.status(200).json({
            success:true,
            redirectUrl: '/blog-post'
          }) 
      })
      .catch(next);
    }
    else next(new Error('Invalid inputs.'));
    
}
    