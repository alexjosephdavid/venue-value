const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  venue: {type: String, required: false, unique: true},
  artist: {type: String, required: false},
  review: {type: String, required: false},
  image: {type: String, required: false}
})



module.exports = mongoose.model('Review', reviewSchema);