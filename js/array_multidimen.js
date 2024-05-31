'use strict'
//Arrays multidimencionales 
var categoria=["Accion","Terror","Comedia","Romance"];
var peliculas=["star wars","Elementos","Toystory","cars"];

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
var cadena="hola mundo,mama,papa";
var cadena_array=cadena.split(",");
console.log(cadena_array);




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

