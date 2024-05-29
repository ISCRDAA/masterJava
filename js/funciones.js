'use strict'
// funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones.
function calculadora(num1,num2,mostrar=false){
    //return"hola soy la calculadora";
    if(mostrar==false){
        console.log("Suma "+(num1+num2));
        console.log("Resta "+(num1-num2));
        console.log("Division "+(num1/num2));
        console.log("Multiplicacion "+(num1*num2));
        console.log("**********************************")
    }else{
        document.write("Suma "+(num1+num2)+"<br>");
        document.write("Resta "+(num1-num2)+"<br>");
        document.write("Division "+(num1/num2)+"<br>");
        document.write("Multiplicacion "+(num1*num2)+"<br>");
        document.write("**********************************"+"<br>")
    }
    
    

}
calculadora(2,9,true);
calculadora(3,3);

/*for(var i=0; i<=10; i++){
    console.log(i);
    calculadora(i,9);
    calculadora(i,9,true);
    
}
*/
