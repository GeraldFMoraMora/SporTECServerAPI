var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  name: String,
  email: String,
  pass: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
