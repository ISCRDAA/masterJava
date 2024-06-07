'use strict'
//Vamos a ver los timers

window.addEventListener("load",function(){
    //timers
    var encabezado=document.querySelector("#encabezado");
    //Con esta funcion puedes hacer que se repita cada cierto tiempo setInterval y con setTimeout es para que solo se haga una sola vez
    var tiempo = this.setInterval(function(){
        encabezado.style.color="green";
        encabezado.style.fontSize="50px";

        if(encabezado.style.fontSize=="90px"){
            encabezado.style.color="orange";
            
        }else{
            encabezado.style.color="red";
            encabezado.style.fontSize="90px";
            encabezado.style.border="yellow";
        }
       
        console.log("set interval ejecutado");

    },1000);

    var stop=document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("has para el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start=this.document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("has iniciado el bucle");
        
    });
})