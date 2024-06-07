"use strict";

//Eventos del formulario
window.addEventListener("load", () => {
  //evento focus
  var form = document.getElementById("nombre");
  console.log(form);
  form.addEventListener("focus", function () {
    console.log("[focus] Estas haciendo foco en el input");
  });

  //evento blur -es para cuando te sales de la selecicon del input.
  form.addEventListener("blur", function () {
    console.log("[blur] Estas afuera del input");
  });
  //evento keydown -es para cuando se pulse  una tecla en el input.
  form.addEventListener("keydown", function (event) {
    console.log(
      "[keydown] has escrito en el iput " + String.fromCharCode(event.code)
    );
  });
  //evento keypress -es para saber que tecla esta presionada
  form.addEventListener("keypress", function (event) {
    console.log("Has presionado una tecla", String.fromCharCode(event.code));
  });
});
