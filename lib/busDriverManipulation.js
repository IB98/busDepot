var mongoose = require('./mongoose');
var BusDriver = require('../models/busDriver').BusDriver;

function addDriver(name, age, route) {
  mongoose.connection.on('open', function () {
      console.log('Connection to database established');
  });
  new BusDriver({driverName: name, driverAge: age,
    routeNumber: route}).save();
}

function findAllDrivers(callback) {
  BusDriver.find({}, function (err, drivers) {
      callback(drivers);
  });
}

module.exports.addDriver = addDriver;
module.exports.findAllDrivers = findAllDrivers;
