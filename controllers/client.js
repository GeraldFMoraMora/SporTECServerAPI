var mongoose = require('mongoose');
var Client = mongoose.model('Client');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Client.find(function(err, clients){
    if (err) res.send(500, err.message);
    console.log('GET/clients');
    res.status(200).jsonp(clients);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Client.findById(req.params.id, function(err, client){
    if(err) return res.send(500, err.message);
    console.log('GET/clients/'+req.params.id);
    res.status(200).jsonp(client);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var client = new Client({
    name: req.body.name,
    email: req.body.email,
    genre: req.body.genre
  });
  client.save(function(err, client){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(client);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Client.findById(req.params.id,function(err, client){
    client.name = req.body.name;
    client.email = req.body.email;
    client.genre = req.body.genre;
    client.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(client);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Client.findById(req.params.id, function(err, client){
    client.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
