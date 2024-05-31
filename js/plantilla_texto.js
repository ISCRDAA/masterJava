'use strict'
//plantillas de texto 
var nombre=prompt("Ingrese un nombre");
var apellidos=prompt("Ingrese sus apellidos");

//var texto="Mi nombre es "+nombre+" y mis apellidos son "+apellidos;
//console.log(texto);

//Plantillas con interpolacion de datos
var texto=`
    <h1>Estos son mis datos personales</h1> 
    <p>Mi nombre es ${nombre} y mis apellidos son ${apellidos}</p>
`;


document.write(texto);