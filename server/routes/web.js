const express = require('express')

const router = express.Router()

const pagesController = require('../controllers/pagesController')
const projectsController = require('../controllers/projectController')
const blogController =  require('../controllers/blogController')

router.get('/', pagesController.homePage)

router.get('/about', pagesController.aboutPage)

router.get('/projects', projectsController.index)

router.get('/blog', blogController.index)

router.get('/pug', pagesController.pug)

module.exports = router;
