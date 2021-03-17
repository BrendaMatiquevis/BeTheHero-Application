const express = require('express');

const OngController =  require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);


//Listagem de ongs
routes.get('/ongs', OngController.index);

//Cadastro de ongs
routes.post('/ongs', OngController.create);


//Verificar casos de uma ong
routes.get('/profile', ProfileController.index);


//Listagem de casos
routes.get('/incidents', IncidentController.index);

//Cadatro de casos
routes.post('/incidents', IncidentController.create);

//Deleção de casos
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;