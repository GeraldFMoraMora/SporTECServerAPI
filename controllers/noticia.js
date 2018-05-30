var mongoose = require('mongoose');
var Noticia = mongoose.model('Noticia');

// GET - Voy a retornar todos los registros
exports.findAll = function(req, res){
  Noticia.find(function(err, noticias){
    if (err) res.send(500, err.message);
    console.log('GET/noticias');
    res.status(200).jsonp(noticias);
  });
};
// GET - Voy a retornar el registro que busco
exports.findById = function(req, res){
  Noticia.findById(req.params.id, function(err, noticia){
    if(err) return res.send(500, err.message);
    console.log('GET/noticias/'+req.params.id);
    res.status(200).jsonp(noticia);
  });
};
// POST - Voy a insertar un nuevo registro
exports.add = function(req, res){
  console.log('POST');
  console.log(req.body);
  var noticia = new Noticia({
    title: req.body.title,
    description: req.body.description,
    photo: req.body.photo,
    id: req.body.id,
    today: req.body.today

  });
  noticia.save(function(err, noticia){
    if (err) return res.send(500, err.message);
    res.status(200).jsonp(noticia);
  });
};
// PUT - Voy a actualizar a los registros existentes
exports.update = function(req, res){
  Noticia.findById(req.params.id,function(err, noticia){
    noticia.title = req.body.title;
    noticia.description = req.body.description;
    noticia.photo = req.body.photo;
    noticia.id = req.body.id;
    noticia.today = req.body.today;
    noticia.save(function(err){
      if (err) return res.send(500, err.message);
      res.status(200).jsonp(noticia);
    });
  });
};
// DELETE - Voy a eliminar uno de los registros existentes
exports.delete = function(req, res){
  Noticia.findById(req.params.id, function(err, noticia){
    noticia.remove(function(err){
      if (err) return res.send(500, err.message);
      res.json({ message: 'Resgistro correctamente eliminado' });
    });
  });
};
