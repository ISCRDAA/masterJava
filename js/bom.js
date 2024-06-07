'use strict'
//Vamos a trbajar con el bom- browser object model

function getbom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location.href);
}

function redirect(url){
window.location.href=url;
}
function open_window(url){
    window.open(url,"","width=40","height=30");
}
getbom();

