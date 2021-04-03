/**
 * University of La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Computer Ingenieering Degree
 * Programación de Aplicaciones Interactivas
 *
 * @author Marta Julia González Padrón
 * @since 10.mar.2021
 * @description File that deploys the web.
 */
const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

//set the port
APP.set('port', 8088);

//tell express that we want to use the www folder
//for our static assets
APP.use(EXPRESS.static(PATH.join(__dirname, '../www')));

// Listen for requests
const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function () {
  console.log('The server is running on http://<your machine IP addr>:' + APP.get('port'));
});
