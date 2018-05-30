var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const equipoSchema = new Schema({
  name: {type: String},
  sport: {type: String},
  photo: {type: String}
});

module.exports = mongoose.model('Equipo', equipoSchema);
