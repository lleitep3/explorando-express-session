const express = require('express')
const router = express.Router()

/* GET users listing. */
router.post('/login', function (req, res, next) {
  req.session.user = {
    name: 'Manolo',
    email: 'manolo@email.com'
  }
})

module.exports = router
