const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Hotels = require('../database/schema.js');

const app = express();
const port = 3002;

app.use( express.static( path.join(__dirname, '/../client/dist') ) );

app.get('/:hotelID', (req, res) => {
  res.sendFile( path.join(__dirname, '/../client/dist/index.html') );
});

app.get('/api/:hotelID/photos', (req, res) => {
  Hotels.find({ id: req.params.hotelID })
    .then( hotels => res.status(200).send(hotels[0]) );
});

app.listen(port, () => console.log(`FEC listening on port ${port}`));

//