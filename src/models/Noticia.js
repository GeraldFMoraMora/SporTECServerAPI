import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  name: String
});
const Noticia = mongoose.model('noticias', NoticiaSchema);
export default Noticia;
