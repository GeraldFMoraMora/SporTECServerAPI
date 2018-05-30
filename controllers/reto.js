var mongoose = require('mongoose');
var Reto = mongoose.model('Reto');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Reto.find(function(err, retos){
    if (err) res.send(500, err.message);
    console.log('GET/retos');
    res.status(200).jsonp(retos);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Reto.findById(req.params.id, function(err, reto){
    if(err) return res.send(500, err.message);
    console.log('GET/retos/'+req.params.id);
    res.status(200).jsonp(reto);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var reto = new Reto({
    name: req.body.name,
    team1: req.body.team1,
    team2: req.body.team2
  });
  reto.save(function(err, reto){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(reto);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Reto.findById(req.params.id,function(err, reto){
    reto.name = req.body.name;
    reto.team1 = req.body.team1;
    reto.team2 = req.body.team2;
    reto.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(reto);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Reto.findById(req.params.id, function(err, reto){
    reto.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
