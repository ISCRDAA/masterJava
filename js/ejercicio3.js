'use strict'
//ejercicio 3 Hacer un programa que muestre todos los numeros entre dos numero introducidos por el usuario .

var num1=0;
var num2=0;

num1=parseInt(prompt("Introduce el primer numero",0));
num2 =parseInt(prompt("Introduce el siguiente numero",0));

document.write("<h1> De "+num1+ " a "+num2+ "estan estos numeros:</h1>")
for(var i = num1;i<=num2; i++){
    document.write(i+"<br>");
}