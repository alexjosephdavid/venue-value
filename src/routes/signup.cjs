const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.cjs')

router.post('/', userController.signUp, (req, res) => {
  console.log('HIT SIGN UP AT END')
  return res.status(200).json({valid: true})
})


module.exports = router;