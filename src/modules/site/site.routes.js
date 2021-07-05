const express = require('express')
const SiteController = require('./site.controller')
const router = express.Router()

/* Site Pages */
router.get('/', SiteController.homePage)
router.get('/me', SiteController.profilePage)
router.get('/login', SiteController.loginPage)
router.get('/register', SiteController.registerPage)
/* END - Site Pages */

router.post('/login', SiteController.doLogin)
router.get('/logout', SiteController.doLogout)

router.post('/register', SiteController.doRegister)

module.exports = router
