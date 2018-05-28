import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EquipoSchema = new Schema({
  name: String
});
const Equipo = mongoose.model('equipos', EquipoSchema);
export default Equipo;
