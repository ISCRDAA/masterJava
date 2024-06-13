'use strict';

// local storage 

//comprobar disponibilidad del local storage
if(Storage!=undefined){
    console.log("local storage")
}else{
    console.log("no storage");
}
//guardar datos en el local storage
localStorage.setItem("hola","curso de simfony de angel ");

//recuperar elemento del local storage
var local=localStorage.getItem("hola");
console.log(local);
var position=document.querySelector("#peliculas");
position.append(local);

var usuarios ={
    nombre: "angel",
    apellido:"rodriguez",
    edad: 25

}
var guardados =localStorage.setItem("datos",JSON.stringify(usuarios));
var datosjson=JSON.parse(localStorage.getItem("datos"));
console.log(datosjson);
var info= document.querySelector("#info");
info.append("mi apellido es "+datosjson.apellido);

info.append("mi edad es "+datosjson.edad);

localStorage.clear();