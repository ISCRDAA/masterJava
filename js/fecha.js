'use strict';
var fecha = new Date();
var year =fecha.getFullYear();
var mes = fecha.getMonth() +1;
var day = fecha.getDate();
var hour = fecha.getHours();
var minute = fecha.getMinutes();
var second = fecha.getSeconds();
var millisecond = fecha.getMilliseconds();


var textoHora=`
El año es: ${year},
El mes es: ${mes},
El dia es: ${day},
La hora es: ${hour}:${minute}:${second}:${millisecond}
 
`;
console.log(textoHora);
console.log(Math.floor(Math.random()*11));
console.log(Math.ceil(Math.random()*20));