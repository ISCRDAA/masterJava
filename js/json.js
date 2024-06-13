'use strict';
//JSON es notacion de objetos en java script;
var pelicula={
    titulo:"Batman vs super manage",
    year: "2015",
    country: "United States"
}

var peliculas=[
    {titulo:"La verdad duele",year: "2015",country: "United States"},
    {titulo:"apple",year: "2011",country: "United States"}
];
console.log(peliculas);

var caja_peli =document.querySelector("#peliculas");
var index;
for (index in peliculas) {
    var p = document.createElement("p")
    p.append(peliculas[index].titulo+" "+peliculas[index].country);
    caja_peli.append(p);
}

pelicula.titulo="sing 2";
console.log(pelicula);