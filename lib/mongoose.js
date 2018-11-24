var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get('mongoose:uri'), { });
mongoose.Promise = global.Promise;

module.exports = mongoose;
