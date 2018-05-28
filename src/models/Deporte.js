import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DeporteSchema = new Schema({
  name: String
});
const Deporte = mongoose.model('deportes', DeporteSchema);
export default Deporte;
