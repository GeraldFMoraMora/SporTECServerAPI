import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RetoSchema = new Schema({
  name: String
});
const Reto = mongoose.model('retos', RetoSchema);
export default Reto;
