const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const hotelSchema = new mongoose.Schema({
  hotel_id: Number,
  name: String,
  date: Date,
  hotel_photos: [{ imageUrl: String, caption: String }],
  travelers: [{ imageUrl: String, username: String, rating: Number }],
  price: Number,
  reviews: Number,
  rating: Number,
  location: String,
  type: String,
  phoneNumber: Number,
  views: Number,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;