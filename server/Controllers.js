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
  const { hotelID } = req.params;
  const { imageUrl, caption, rating, date } = req.body;
  Models.postTravelerPhoto(hotelID, imageUrl, caption, rating, date, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function putTravelerCaption(req, res) {
  const { hotelID, travelerPhotoId } = req.params;
  const { caption } = req.body;
  Models.putTravelerCaption(hotelID, travelerPhotoId, caption, (err, data) => {
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