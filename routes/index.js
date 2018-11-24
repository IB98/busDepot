var express = require('express');
var router = express.Router();
var driversCollection = require('../lib/busDriverManipulation');

/* GET home page. */
router.get('/', function(req, res, next) {
  driversCollection.findAllDrivers(function (busDrivers) {
    res.render(('index'), { busDrivers: busDrivers });
  });
});

module.exports = router;
