'use strict'
//Funciones anonimas y callbacks
//Es una funcion que no tiene nombre 

var pelicula
function pelicula(nombre){
    return "La pelicula es "+nombre;

}

function sumame(numero1,numero2,sumaYmuestra,sumaPordos){
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPordos(sumar);

    return sumar;

}
sumame(2,4,dato =>{
console.log("La suma es "+dato);
},dato =>{
    console.log("La suma por dos "+(dato*2))

});