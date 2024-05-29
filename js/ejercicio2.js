'use strict'
//Ejercicio 2 utilizando un bucle mostrar la media y la suma de dos resultados introducidos por el usuario,hasta que el usuario meta un numero negativo

var suma=0;
var contador=0;

do{

    var numero =parseInt(prompt("Ingrese numeros hasta que ingrese un numero negativo",0));
    if(isNaN(numero)){
        numero =0;
    }else if(numero>=0){
        suma=suma+numero;
        contador++
    }
    console.log(suma);
    console.log(contador);

}while(numero >=0)
    alert("La suma de todos los numeros es: "+suma)
    alert("La media de todos los numeros es "+(suma/contador));