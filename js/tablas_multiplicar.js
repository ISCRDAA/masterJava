'use strict'
//Ejerccio par hacer las tablaas de multiplicar 
var num =parseInt(prompt("¿De que numero quieres tu tabla?"));

for(var i=0;i<=10;i++){
    var resultado=i*num;
    document.write("<h1>El numero de la tabla de multiplicar es:"+i+"</h1><br>");
    document.write(num+"x"+i +" ="+resultado+"<br>");
}