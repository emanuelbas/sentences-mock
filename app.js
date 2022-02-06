const express = require("express");
const app = express(); app.post('/hola', function (req, res) {
    res.send('[POST]Saludos desde express');

});



const sentencias = [
    {'sentencia':'Se completan los campos de selección:'},
    {'sentencia':'Se realiza la búsqueda:'},
    {'sentencia':'Se verifica que la consulta muestre registros:'},
    {'sentencia':'Se verifica la existencia de registros que contengan "VALOR" en el campo "NOMBRE DE CAMPO":'},
    {'sentencia':'Se verifica que la consulta no muestre registros:'},
    {'sentencia':'Se verifica que se muestre el mensaje "MENSAJE"'},
    {'sentencia':'Se limpian los filtros de selección'},
    {'sentencia':'Se presiona la opción "string" dentro de la enquiry'},
    {'sentencia':'Se presiona para volver a la pantalla anterior'},
    {'sentencia':'Se presiona en la lupa'},  
]


app.get('/sentencias', function (req, res) {
    res.send(sentencias);

});



app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');

});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

//https://asfo.medium.com/desarrollando-una-sencilla-api-rest-con-nodejs-y-express-cab0813f7e4b