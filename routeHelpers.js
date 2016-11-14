const fs = require('file-system');
const path = require('path');
const geoCoder = require('./geoCoder');

const dbHelpers = require('./dbHelpers');

module.exports = {
  getCurrentPosition: (req, res) => {
    geoCoder.reverse({ lat: req.query.lat, lon: req.query.lon }, (err, data) => {
      res.send(`${data[0].city}, ${data[0].administrativeLevels.level1short}`);
    });
  },

  getListings: (req, res) => {
    dbHelpers.getListings(req.params.city)
    .then((listings) => {
      console.log('listings from route helpers', listings);
      res.json(listings);
    })
    .catch((err) => {
      res.statusCode(400).send('Error: ', err);
    });
  },

  getListing: (req, res) => {
    dbHelpers.getListing(req.params.listingId)
    .then((listing) => {
      res.json(listing);
    })
    .catch((err) => {
      res.statusCode(400).send('Error: ', err);
    });
  },

  postListing: (req, res) => {
    dbHelpers.postListing(req.body)
    .then((listing) => {
      console.log('Posted listing: ', listing);
      res.json(listing);
    })
    .catch((err) => {
      console.log('Failed to post listing: ', err);
      res.json(err);
    });
  },

  getImages: (req, res) => {
    res.writeHead(201, { 'Content-Type': 'img/jpeg' });
    fs.readFile(path.join(__dirname, '/assets/', req.params.image), (err, data) => {
      if (err) {
        console.log('Error reading image: ', err);
      }
      res.end(data);
    });
  },

  postImages: (req, res) => {
    dbHelpers.postImages(req.body)
    .then(() => {
      console.log('IN POST IMAGES THEN BLOCK')
      res.end();
    });
  }
};
