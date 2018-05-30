var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deporteSchema = new Schema({
  name: {type: String},
  photo: {type: String}
});

module.exports = mongoose.model('Deporte', deporteSchema);
