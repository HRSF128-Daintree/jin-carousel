const db = require('../database-postgresql');

function getHotelPhotos(hotelId, callback) {
  const q = `SELECT h_imageUrl FROM hotel_photos WHERE hotel_id = ${hotelId}`;
  db.query(q, callback);
}

function getTravelerPhotos(hotelId, callback) {
  const q = `SELECT t_imageUrl FROM traveler_photos WHERE hotel_id = ${hotelId}`;
  db.query(q, callback);
}

function postTravelerPhoto(hotelId, userId, imageUrl, date, caption, rating, callback) {
  const q = `INSERT INTO traveler_photos(t_imageUrl, caption, traveler_rating, date, hotel_id, user_id) VALUES ('testing', 'testing', 5, '2020-07-13T03:57:50.009Z', 23, 9);`
  db.query(q, callback);
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


// const q = `SELECT t_imageUrl, caption FROM traveler_photos INNER JOIN hotels ON traveler_photos.hotel_id = hotels.id WHERE traveler_photos.hotel_id = ${hotelId}`;