'use strict'
//Vamos a comenzar a manipular el dom
// El siguiente fragmento es para conseguir elementos por su id
function cambiaColor(color){

    caja.style.background=color;
}
//var caja =document.getElementById("micaja");
var caja= document.querySelector("#micaja");
caja.innerHTML="Texto desde java script";
caja.style.background="red";
caja.style.padding="20px";
caja.className="Hola mexico";

console.log(caja);

//conseguir los elementos por su etiqueta
var divs=document.getElementsByTagName("div");
var seccion=document.querySelector("#misection");
var hr =document.createElement("hr");


console.log(divs);
//divs.array.forEach((valor, indice) => {
    var valor;
    for(valor in divs){
    console.log(divs[valor]);
        if(typeof divs[valor].textContent =="string"){

            var parrafo=document.createElement("p")
            var texto=document.createTextNode(divs[valor].textContent);
            parrafo.append(texto);
            seccion.appendChild(parrafo);
        }
    
    }
    seccion.append(hr);

//});


//seleccionar una parte del documento con su clase

var div_rojo=document.getElementsByClassName('rojo');
console.log(div_rojo);
var div;

for(div in div_rojo){
    if(div_rojo[div].className == "rojo"){
        div_rojo[div].style.background="green";

    }

}
var div_amarillo=document.getElementsByClassName('amarillo');
console.log(div_amarillo);
div_amarillo[0].style.background="orange";

//query selector con  clases
var encabezado=document.querySelector("#encabezado");
console.log(encabezado);

var titulo=document.querySelectorAll(".titulo");
console.log(titulo);




