var mongoose = require('mongoose');
var Equipo = mongoose.model('Equipo');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Equipo.find(function(err, equipos){
    if (err) res.send(500, err.message);
    console.log('GET/equipos');
    res.status(200).jsonp(equipos);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Equipo.findById(req.params.id, function(err, equipo){
    if(err) return res.send(500, err.message);
    console.log('GET/equipos/'+req.params.id);
    res.status(200).jsonp(equipo);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var equipo = new Equipo({
    name: req.body.name,
    sport: req.body.sport,
    photo: req.body.photo
  });
  equipo.save(function(err, equipo){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(equipo);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Equipo.findById(req.params.id,function(err, equipo){
    equipo.name = req.body.name;
    equipo.sport = req.body.sport;
    equipo.photo = req.body.photo;
    equipo.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(equipo);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Equipo.findById(req.params.id, function(err, equipo){
    equipo.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
