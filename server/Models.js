const db = require('../database-postgresql');

function getHotelPhotos(hotelId, callback) {
  console.log(hotelId)
  const q = `SELECT t_imageUrl, caption FROM traveler_photos INNER JOIN hotels ON traveler_photos.hotel_id = hotels.id WHERE traveler_photos.hotel_id = ${hotelId}`;
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