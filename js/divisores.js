'use strict'
//Ejerccio para poder saber todos los numeros divisores de un numero ingresado.

var num=parseInt(prompt("Ingrese el numero que desea verificar",1));

for(var i=1;i<=num;i++){
    if(num%i ==0){
        console.log("El numero divisor es "+i);
    }
    

}