var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://tesneem:Sweet heart@ds115350.mlab.com:15350/tesneem');

module.exports = connection;
