var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const noticiaSchema = new Schema({
  title: {type: String},
  description: {type: String},
  photo: {type: String},
  id: {type: String},
  today: {type: Boolean}
});

module.exports = mongoose.model('Noticia', noticiaSchema);
