'use strict';

function pass(clave){
    var verdad = true;
    var falso = false;

    if(clave =="2Fj(jjbFsuj" || clave =="eoZiugBf&g9"){
        console.log("La contraseña es correcta "+verdad);
    }else{
        console.log("La contraseña no es correcta "+falso);
    }
}
console.log(pass("2Fj(jjbFsuj")) ;// true
console.log(pass("eoZiugBf&g9")); // true
console.log(pass("hola")); // false
console.log(pass("")); //false