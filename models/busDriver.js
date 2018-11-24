var mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  driverName: {
    type: String,
    required: true,
  },
  driverAge: {
      type: Number,
      required: true,
  },
  routeNumber: {
    type: Number
  }
});

exports.BusDriver = mongoose.model('BusDriver', schema);
