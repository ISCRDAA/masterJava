'use strict'
//ejercicio 1 hacer un programa que pida dos numeros y que nos diga cual es mayor cual es el menor y si son iguales. PLUS: si los numeros no son numeros y son menores e igual a 0, no los vuelva a pedir
var num1;
var num2;


while(num1<=0||isNaN(num1)||num2<=0||isNaN(num2)){
    num1=parseInt(prompt("Ingrese el primer numero",0));
    num2=parseInt(prompt("Ingrese el segundo numero",0));
}

if(num1>num2){
    alert("El numero mayor es "+num1)
    alert("El numero menor es "+num2)
    
}
if(num1 ==num2 || num2==num1){
    alert("Los numeros son iguales")
}
if(num2>num1){
    alert("El numero mayor es "+num2)
    alert("El numero menor es "+num1)
}
