'use strict';
window.addEventListener("load", () => {
    console.log("doom cargado!");

    var formulario = document.querySelector("#formulario");
    console.log("formulario");
    var datos=document.getElementById("datos");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";
   
    
    
    formulario.addEventListener("submit", () => {
        var nombre=document.querySelector("#nombre").value;
        console.log(nombre);
        var apellido=document.querySelector("#apellido").value;
        console.log(apellido);
        var edad=parseInt(document.querySelector("#edad").value);
        console.log(edad);
        if(nombre.trim()==null || nombre.trim().length==0){

           
            alert("El nombre no es valido")
            return false;

        }
        if(apellido.trim()==null || apellido.trim().length==0){

           
            alert("El apellido no es valido")
            return false;

        }
        if(edad==null || edad<=0 || isNaN(edad)){

          
            alert("La edad no es valida")
            return false;

        }
        box_dashed.style.display="block";
       datos.innerHTML="Hola mundo este es mi nombre: "+nombre+" y mi apellido: "+apellido+" y tengo de edead: "+edad+" años";
        
        return false;
    });
    



});