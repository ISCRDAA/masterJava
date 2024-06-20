'use strict';
function calcular_impuestos(edad,impuesto){
    var ingreso;
  if (edad >=18 && impuesto >=1000){
    ingreso =impuesto *.40;
    console.log(ingreso);
  }else{
    console.log("Su ingreso es de 0")
  }

}
console.log(calcular_impuestos(18, 1000)) // 400
console.log(calcular_impuestos(18, 10000)) // 4000
console.log(calcular_impuestos(17, 500)) // 4000