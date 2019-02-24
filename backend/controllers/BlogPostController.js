const mongoose = require('mongoose');
const Data = mongoose.model('Data');
const { body, validationResult } = require('express-validator/check');


exports.validate=()=>{
  return [
      body('title')
         .isLength({ min:15 }).withMessage('Title must have at least 15 characters.'),
      body('text')
        .isLength({ min:50 }).withMessage('Text must have at least 50 characters.'),
    ]
}

exports.createBlogPost=(req,res,next) => {
    const result = validationResult(req);
    console.log(result.isEmpty());
    if (result.isEmpty()) {
      const data = new Data(req.body);
      data
      .save()
      .then(() => {
            return res.status(200).json({
                    success:true,
                    message:'Your post saved!',
            });
      })
      .catch(next);
    }
    else next(new Error('Invalid inputs.'));
}
    