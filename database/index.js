const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/hotelcarousel';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log('Connected'))
  .catch((err) => { console.log(err); });

module.exports = db;

