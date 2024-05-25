'use strict'

// condicional if
//si es a igual b haz algo

var edad=34;
var nombre="luis suarez";

if(edad>=18){
    console.log("Eres mayor de edad"+" "+nombre);
    if(edad <= 33){
        console.log("Todavia eres un milenial");
    }else{
        console.log("Ya no eres milenial")
    }
}else{
    console.log("Espera unos años mas");
}
//Operadores logicos && 
var ano =2022;
if(ano !=2016){
    console.log("El años es no es 2016");
}

//and 
if(ano >=2000 && ano<=2020){
    console.log("estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna")
}

//or
if(ano==2022 || ano==2020){
    console.log("Casi le atinas al año pero estamos en el año:"+ano);
}
