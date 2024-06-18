'use strict'
window.addEventListener("load", () => {

    var form = document.querySelector("#form_peliculas");
    form.addEventListener("submit", () => {
        var titulo = document.querySelector("#nombre").value;
        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#lista");
    for (var i in localStorage) {
        if (typeof localStorage[i] == "string") {
            var lista = document.createElement("li");
            lista.append(localStorage[i]);
            ul.append(lista);
        }
        console.log(localStorage[i]);
    }

    var form = document.querySelector("#form_peliculasB");
    form.addEventListener("submit", () => {
        var titulo = document.querySelector("#nombre_borrar").value;
        if (titulo.length >= 1) {
            localStorage.removeItem(titulo, titulo);
        }
    });


})








