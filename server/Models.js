const db = require('../database-postgresql');

function getHotelPhotos(hotelId, callback) {
  const q = 'SELECT * FROM hotels WHERE id=0';
  db.query(q, callback);
}

function getTravelerPhotos(hotelId, callback) {

}


function postTravelerPhoto(hotelId, imageUrl, caption, callback) {

}

function putTravelerCaption(hotelId, caption, callback) {

}

function deleteTravelerPhoto(hotelId, callback) {

}

module.exports = {
  getHotelPhotos,
  getTravelerPhotos,
  postTravelerPhoto,
  putTravelerCaption,
  deleteTravelerPhoto
}