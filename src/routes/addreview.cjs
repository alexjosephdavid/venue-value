const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.cjs')

router.post('/', userController.addReview, (req, res) => {
  console.log('HIIIIT')
  const {venue, artist, id, review} = res.locals
  console.log('HELLOOO')
  return res.status(200).json({venue: venue, artist: artist, id: id, review: review})
})


module.exports = router;