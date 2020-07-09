const Hotel = require('../database/schema.js');

function getPhotos(hotelId, callback) {
  Hotel.find({ hotel_id: hotelId }, callback);
}

function postPhotos(hotelId, imageUrl, caption, callback) {
  Hotel.update({ hotel_id: hotelId, 'hotel_photos._id': id },
    {
      $push: {
        hotel_photos: {
          imageUrl: imageUrl,
          caption: caption,
        },
      },
    }, callback);
}

function updatePhotos(hotelId, caption, callback) {
  Hotel.update({ hotel_id: hotelId, 'hotel_photos._id': id },
    {
      $set: {
        'hotel_photos.$.caption': caption,
      },
    }, callback);
}

function deletePhotos(hotelId, callback) {
  Hotel.findByIdAndRemove({ hotel_id: hotelId }, callback);
}

module.exports = {
  getPhotos,
  postPhotos,
  updatePhotos,
  deletePhotos,
}