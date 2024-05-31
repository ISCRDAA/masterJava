'use strict'
//Arrays o arreglos o matrices es una colleccion de datos 
var nombre="angel alonso";
var lista=["Angel","Luis","Jaciel","Miriam","Carmen"];

//array en forma de objeto

var lenguajes = new Array("php","js","c","c++","perl");
console.log(lista.length);

var dato=parseInt(prompt("Ingrese el indice de el array",0));
var list=["Mandarina","Naranja","Melon","Fresa","Mango"];

while(dato>=list.length){
    alert("Ese elemento no existe")
    var dato=parseInt(prompt("Ingrese el indice de el array",0));
}

document.write("<h1>Elementos de nuestro array</h1>");

//recorrido con forEach

list.forEach((elemento,indice)=>{
    document.write("<i>"+indice+"-. "+elemento+"</i>  <br>");
})

//recorrido con for
/*for(var i=0;i<list.length;i++){
    document.write("<li>")
    document.write("<i>"+list[i]+"</i>  <br>");
    document.write("</li>")
}
*/
document.write("<p>El elemento que seleccionaste fue: "+list[dato]+"</p>");


 