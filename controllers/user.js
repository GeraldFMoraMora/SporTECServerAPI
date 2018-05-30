var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Usuario.find(function(err, usuarios){
    if (err) res.send(500, err.message);
    console.log('GET/usuarios');
    res.status(200).jsonp(usuarios);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Usuario.findById(req.params.id, function(err, usuario){
    if(err) return res.send(500, err.message);
    console.log('GET/usuarios/'+req.params.id);
    res.status(200).jsonp(usuario);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass
  });
  usuario.save(function(err, usuario){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(usuario);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Usuario.findById(req.params.id,function(err, usuario){
    usuario.name = req.body.name;
    usuario.email = req.body.email;
    usuario.pass = req.body.pass;
    usuario.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(usuario);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Usuario.findById(req.params.id, function(err, usuario){
    usuario.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
