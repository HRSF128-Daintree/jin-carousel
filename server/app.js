const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Controllers = require('./Controllers.js');

const app = express();
const port = 3002;

app.use( express.static( path.join(__dirname, '/../client/dist') ) );

app.get('/api/:hotelID/photos', (req, res) => {
  Controllers.getPhotos(req, res);
});

app.post('/api/:hotelID/photos', (req, res) => {
  Controllers.postPhotos(req, res);
});

app.put('/api/:hotelID/photos', (req, res) => {
  Controllers.putPhotos(req, res);
});

app.delete('/api/:hotelID/photos', (req, res) => {
  Controllers.deletePhotos(req, res);
});

app.listen(port, () => console.log(`FEC listening on port ${port}`));