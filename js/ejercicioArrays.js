'use strict'
// Ejercicio de arrays 
/*
Un programa que pida 6 numeros por pantalla
que los almacene en un array
Mostrar el array entero en la pagina y en la consola
ordenarlo y mostralo
invertir su orden
Mostrar cuantos elementos tiene el array
Busqueda de un valor introducido por el usuario, y que nos diga si esta en el array y su indice.
*/

//funcion para poder pintar en la pagina 
function mostrar_desordenado(elementos,texto=" "){
    document.write("<h2>Datos de nuestro array "+texto+"</h2>");
    elementos.forEach((elemento,index)=>{
        document.write("<li><i><strong>"+elemento+"</strong></i></li>");
    });
}
function mostrar_ordenado(elementos,texto=" "){
    document.write("<h2>Datos de nuestro array"+texto+"</h2>");
    elementos.forEach((elemento,index)=>{
        document.write("<li><i><u>"+elemento+"</u></i></li>");
    })

    }


var numeros=[];

for(var i =0; i<=5;i++){

    numeros.push(parseInt(prompt("Ingrese los numeros que desee guardar en el array")));
}

numeros.sort(function(a,b) {return a-b});
mostrar_ordenado(numeros," Ordenado");

numeros.reverse();
mostrar_desordenado(numeros," Desordenado");
console.log("El array tiene: "+numeros.length+" elementos");
console.log(numeros);

var dato =prompt("ingrese el valor a buscar");

var busqueda=numeros.find((num)=>num==dato);
var indice=numeros.findIndex((index)=>index==busqueda);


if(busqueda == dato){
 console.log("El valor de la busqueda es "+dato);
 console.log("Su indice es: "+indice);
}else{
    console.log("El dato que buscas no existe");
}
