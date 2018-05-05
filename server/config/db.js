var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/swp');

module.exports = connection;