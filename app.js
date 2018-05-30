var express = require('express');
// BodyParser permite parsear json.
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Permite implementar y utilizar los metodos Http
var methodOverride = require('method-override');
var app = express();

mongoose.connect('mongodb://localhost/sporTEC-test1', function(err, res){
  if(err) throw err;
  console.log('Conexion exitosa a la base de datos');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.set('port', process.env.PORT || 3000);

// Importo los modelos y controladores
var clientModel = require('./models/client')(app, mongoose);
var deporteModel = require('./models/deporte')(app, mongoose);
var equipoModel = require('./models/equipo')(app, mongoose);
var noticiaModel = require('./models/noticia')(app, mongoose);
var retoModel = require('./models/reto')(app, mongoose);
var userModel = require('./models/user')(app, mongoose);

var ClientCtrl = require('./controllers/client');
var DeporteCtrl = require('./controllers/deporte');
var EquipoCtrl = require('./controllers/equipo');
var NoticiaCtrl = require('./controllers/noticia');
var RetoCtrl = require('./controllers/reto');
var UserCtrl = require('./controllers/user');


var router = express.Router();

router.get('/', function(req, res){
  res.send("Hola mundo soy Gerald");
});

app.use(router);

// Creando las rutas para la apirest
var api = express.Router();

api.route('/clients')
.get(ClientCtrl.findAll)
.post(ClientCtrl.add);

api.route('/client/:id')
.get(ClientCtrl.findById)
.put(ClientCtrl.update)
.delete(ClientCtrl.delete);

api.route('/deportes')
.get(DeporteCtrl.findAll)
.post(DeporteCtrl.add);

api.route('/deporte/:id')
.get(DeporteCtrl.findById)
.put(DeporteCtrl.update)
.delete(DeporteCtrl.delete);

api.route('/equipos')
.get(EquipoCtrl.findAll)
.post(EquipoCtrl.add);

api.route('/equipo/:id')
.get(EquipoCtrl.findById)
.put(EquipoCtrl.update)
.delete(EquipoCtrl.delete);

api.route('/noticias')
.get(NoticiaCtrl.findAll)
.post(NoticiaCtrl.add);

api.route('/noticia/:id')
.get(NoticiaCtrl.findById)
.put(NoticiaCtrl.update)
.delete(NoticiaCtrl.delete);

api.route('/retos')
.get(RetoCtrl.findAll)
.post(RetoCtrl.add);

api.route('/reto/:id')
.get(RetoCtrl.findById)
.put(RetoCtrl.update)
.delete(RetoCtrl.delete);

api.route('/usuarios')
.get(UserCtrl.findAll)
.post(UserCtrl.add);

api.route('/usuario/:id')
.get(UserCtrl.findById)
.put(UserCtrl.update)
.delete(UserCtrl.delete);

app.use('/api', api);

app.listen(app.get('port'), function() {
  console.log("Correctamente conectado el servidor por el puerto especificado");
});
