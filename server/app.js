const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const db = require('../database/index.js');
const Controllers = require('./Controllers.js');

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: false }))
app.use( express.static( path.join(__dirname, '/../client/dist') ) );

app.get('/api/:hotelId/hotelphotos', (req, res) => {
  Controllers.getHotelPhotos(req, res);
});

app.get('/api/:hotelId/travelerphotos', (req, res) => {
  Controllers.getTravelerPhotos(req, res);
});

app.post('/api/:hotelId/travelerphotos', (req, res) => {
  Controllers.postTravelerPhoto(req, res);
});

app.put('/api/:hotelId/travelerphotos/:travelerPhotoId', (req, res) => {
  Controllers.putTravelerCaption(req, res);
});

app.delete('/api/:hotelId/travelerphotos/:travelerPhotoId', (req, res) => {
  Controllers.deleteTravelerPhoto(req, res);
});

app.listen(port, () => console.log(`FEC listening on port ${port}`));