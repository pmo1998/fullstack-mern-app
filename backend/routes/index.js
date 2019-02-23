const path = require('path');
const express = require('express');
const router = express.Router();


const RegistrationController=require('../controllers/RegistrationController');
const BlogPostController=require('../controllers/BlogPostController');


router.post('/',RegistrationController.validate(),RegistrationController.createRegistration);
router.post('/blog-post', BlogPostController.validate(),BlogPostController.createBlogPost);

module.exports = router;
