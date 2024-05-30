'use strict'
//parametros RES y SPREAD
function listadoFrutas(fruta1,fruta2, ...resto_frutas){
    console.log("La fruta 1 es: "+fruta1);
    console.log("La fruta 2 es: "+fruta2);
    console.log("El resto de frutas es: "+resto_frutas);
}
listadoFrutas("naranja","Manzana","Sandia","Pera","Melon","Coco");

var lista =["naranja","Manzana"];
console.log(lista);

listadoFrutas(...lista,"Sandia","Pera","Melon","Coco");