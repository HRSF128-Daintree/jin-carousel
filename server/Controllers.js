const Models = require('./Models.js');

function getHotelPhotos(req, res) {
  const { hotelId } = req.params;
  Models.getHotelPhotos(hotelId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function getTravelerPhotos(req, res) {
  const { hotelId } = req.params;
  Models.getTravelerPhotos(hotelId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function postTravelerPhoto(req, res) {
  const hotelId = parseInt(req.params.hotelId);
  const { imageUrl, caption } = req.body;
  const userId = parseInt(req.body.userId);
  const rating = parseInt(req.body.rating);
  const date = new Date();
  Models.postTravelerPhoto(hotelId, userId, imageUrl, caption, rating, date, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function putTravelerCaption(req, res) {
  const { hotelId, travelerPhotoId } = req.params;
  const { caption } = req.body;
  Models.putTravelerCaption(hotelId, travelerPhotoId, caption, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function deleteTravelerPhoto(req, res) {
  const { hotelID, travelerPhotoId } = req.params;
  Models.deleteTravelerPhoto(hotelID, travelerPhotoId, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

module.exports = {
  getHotelPhotos,
  getTravelerPhotos,
  postTravelerPhoto,
  putTravelerCaption,
  deleteTravelerPhoto
}