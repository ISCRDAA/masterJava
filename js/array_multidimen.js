'use strict'
//Arrays multidimencionales 
var categoria=["Accion","Terror","Comedia","Romance"];
var peliculas=["Star wars","Elementos","Toystory","Cars"];

//ordenamiento de arrays
peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine=[categoria,peliculas];

console.log(cine[0][1]);
console.log(cine[1][1]);
peliculas.push("batman");
console.log(peliculas);



var indice=peliculas.indexOf("star wars");
console.log(indice);
if(indice > -1){
    peliculas.splice(indice,3);
    console.log(peliculas);
}

//formato para poder convertir los arrays a texto
var texto_peliculas=peliculas.join();
console.log(texto_peliculas);


//convertir un string a un array
var cadena="hola mundo,mama,papa,angel,alan,lilia,pupis";
var cadena_array=cadena.split(",");

//recorrer un array con un for in
for(let cadena_a in cadena_array){
    console.log(cadena_array[cadena_a]);
}


cadena_array.sort();
console.log(cadena_array);

//Buscar dentre de un array
var precios=[1,2,3,4,5,6,7,8,9,10,12,14,16,28,32];

//busqueda cumpliendo una condicion retorna un true o un false
var busqueda_precio=precios.some(dato => dato>=290);
console.log(busqueda_precio);

//busqueda por su index
var busqueda=cadena_array.findIndex(dato => dato=="papa");
console.log(busqueda);




//forma para poder ingresar datos a un array hasta que nosotros le confirmemos que ya no queremos mas elementos.
/* 
var elemento="";

do{
    elemento=prompt("Ingrese un elemento al array");
    peliculas.push(elemento);
    console.log(peliculas);
}while(elemento !="Acabar" && elemento!="Fin")
    peliculas.pop();
    console.log(peliculas);
*/

