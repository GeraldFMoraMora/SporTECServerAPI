var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const retoSchema = new Schema({
  name: {type: String},
  team1: {type: String},
  team2: {type: String}
});

module.exports = mongoose.model('Reto', retoSchema);
