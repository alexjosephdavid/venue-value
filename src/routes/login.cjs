const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.cjs')

router.post('/', userController.verifyUser, (req, res) => {
  console.log('HIIIIT')
  return res.status(200).json({valid: true})
})


module.exports = router;