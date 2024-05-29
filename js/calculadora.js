'use strict'
/*calculadora
1.- Que pida dos numeros por pantalla,
2.-Si metemos uno mal que no lo vuelva a pedir,
3.-En el cuerpo de la pagina, en una alerta y por la consolael resultado de sumar,restar,mulriplicar y dividir esas dos cifras.
*/




alert("Ingrese la operacion que desee hacer:");
var seleccion=parseInt(prompt("suma(1),resta(2),division(3),multiplicacion(4)"));

while(isNaN(num1)||isNaN(num2)||num1<=0||num2<=0){
    
    var num1=parseInt(prompt("Ingrese el primer numero"));
    var num2=parseInt(prompt("Ingrese el segundo numero"));
}

switch(seleccion){
    case 1:
        console.log((num1 +num2))
        document.write("<h2>El resultado de la operacion suma fue "+(num1+num2)+" </h2>");
        break;
    case 2:
        console.log((num1-num2));
        document.write("<h2>El resultado de la operacion resta fue "+(num1-num2)+" </h2>");
        break;
    case 3:
        console.log((num1/num2));
        document.write("<h2>El resultado de la operacion division fue "+(num1/num2)+" </h2>");
        break;
    case 4:
        console.log((num1*num2));
        document.write("<h2>El resultado de la operacion multiplicaicon fue "+(num1*num2)+" </h2>");
        break;
    default:
        alert("La opcion no existe");
        break;
}




