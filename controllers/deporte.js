var mongoose = require('mongoose');
var Deporte = mongoose.model('Deporte');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Deporte.find(function(err, deportes){
    if (err) res.send(500, err.message);
    console.log('GET/deportes');
    res.status(200).jsonp(deportes);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Deporte.findById(req.params.id, function(err, deporte){
    if(err) return res.send(500, err.message);
    console.log('GET/deportes/'+req.params.id);
    res.status(200).jsonp(deporte);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var deporte = new Deporte({
    name: req.body.name,
    photo: req.body.photo
  });
  deporte.save(function(err, deporte){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(deporte);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Deporte.findById(req.params.id,function(err, deporte){
    deporte.name = req.body.name;
    deporte.photo = req.body.photo;
    deporte.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(deporte);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Deporte.findById(req.params.id, function(err, deporte){
    deporte.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
