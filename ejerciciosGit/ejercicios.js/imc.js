'use strict';

function bmi(peso, altura){
    var mci=peso / (altura*altura);
    if (mci <18.5){
        console.log("Bajo de peso "+mci)
    }else if (mci>=18.5 && mci <= 24.9){
        console.log("Su peso es el normal "+mci);

    }else if (mci >=25 && mci <=29.9){
        console.log("Tiene sobrepeso "+mci)
    }else if (mci >=30){
        console.log("Tiene Obesidad "+mci)
    }
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
console.log(bmi(115, 1.70)) // "Obeso"