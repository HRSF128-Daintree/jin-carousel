const Models = require('./Models.js');

function getPhotos(req, res) {
  const { hotelID } = req.params;
  Models.getPhotos(hotelID, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function postPhotos(req, res) {
  const { hotelID } = req.params;
  const { imageUrl, caption } = req.body;
  Models.postPhotos(hotelID, imageUrl, caption, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function updatePhotos(req, res) {
  const { hotelID } = req.params;
  const { caption } = req.body;
  Models.updatePhotos(hotelID, caption, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

function deletePhotos(req, res) {
  const { hotelID } = req.params;
  Models.deletePhotos(hotelID, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

module.exports = {
  getPhotos,
  postPhotos,
  updatePhotos,
  deletePhotos
}