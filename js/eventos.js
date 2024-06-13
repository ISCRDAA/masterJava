'use strict'
//eventos del raton

console.log(boton);

function cambiar_Color(){
    console.log("Me has dado click");
    var bg=boton.style.background;
    if(bg=="green"){
        boton.style.background="red";
        boton.style.padding="10px"
        this.style.border="10px solid black"

    }else{
        bg="green";
        boton.style.background="green";
    }
    return true;
}

//Hacer el click en el boton desde java script
var boton =document.querySelector("#boton");
boton.addEventListener('click',cambiar_Color);

//mouse over 
boton.addEventListener("mouseover",function(){
    boton.style.background="orange";
});
  

//Mouse out

boton.addEventListener("mouseout",function(){
    boton.style.background="black";
});