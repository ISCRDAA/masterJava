'use strict'
//Ejercicio 4 Mostrar todos los numeros impares entre dos numeros introducidos por el usuarios

var num1=parseInt(prompt("Ingrese el primer numero",0));
var num2 =parseInt(prompt("Ingrese el segundo numero",0));

while(num1<num2){
    num1++;

    if(num1%2!=0){
        console.log("El "+num1+" es impar ");
    }else if(num1%2 ==0){
        console.log("El "+num1+" es par");

    }
}