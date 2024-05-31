'use strict'
//Metodos para el procesamiento de textos

//convertir el texto o los numeros 
var num=444;
var texto1="   bienvenido al curso de java curso  ";
var texto2="ES MUY BUEN CURSO";

var dato=num.toString();
dato=texto1.toUpperCase();
dato=texto2.toLowerCase();

console.log( dato);
//Calcular la longitud de un texto
var lista =["mexico","usa","cuba","argentina"];
var nombre= "Hola a todos";

console.log(lista.length);

//concatenar es unir textos

var texto_total= texto1.concat(" "+texto2);
console.log(texto_total);

//busquedas
var busqueda=texto1.substr(14,5);
console.log(busqueda);

//extraer una letra de una cadena de texto
var palabra=texto1.charAt(21);
console.log(palabra);
var bus=texto1.includes("java");
console.log(bus);

//funcion para remplezar texto

var replace=texto1.replace("java","Angel");
console.log(replace);

//funcion para cortar un cacho del string
var cortar =texto1.slice(14,30);
console.log(cortar);

//funcion split sirve para poder meter el texto en un array

var sacar =texto1.split(" ");
console.log(sacar);

//funcion trim sirve para quitar los espacios de adelante como de atras de la cadena de texto.

var spacio=texto1.trim();
console.log(spacio);


