const path = require('path');
const express = require('express');
const router = express.Router();


const RegistrationController=require('../controllers/RegistrationController');
const BlogPostController=require('../controllers/BlogPostController');
const AllBlogPostsController=require('../controllers/AllBlogPostsController');

router.post('/',RegistrationController.validate(),RegistrationController.createRegistration);
router.post('/blog-post', BlogPostController.validate(),BlogPostController.createBlogPost);
router.get('/get-blog-posts', AllBlogPostsController.show);


module.exports = router;
