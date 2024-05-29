'use strict'
/*ejercicio par impar
1.- pedir datos en el prompt,
2.- si no mete un numero valido que pida otra vez el numero.
*/

var num=parseInt(prompt("Ingrese el numero que desea verificar",0));

while(isNaN(num)||num<0){
    var num=parseInt(prompt("Ingrese el numero que desea verificar ",0));

}
if(num%2 !=0){
    console.log("El numero: "+num+" es impar");

}else{
    console.log("El numero: "+num+" es par");
}

