const path = require('path');
const express = require('express');
const router = express.Router();


const RegistrationController=require('../controllers/RegistrationController');
const BlogPostController=require('../controllers/BlogPostController');
const AllBlogPostsController=require('../controllers/AllBlogPostsController');

router.get('/', AllBlogPostsController.show);
router.post('/sign-up',RegistrationController.validate(),RegistrationController.createRegistration);
router.post('/blog-post', BlogPostController.validate(),BlogPostController.createBlogPost);


module.exports = router;
