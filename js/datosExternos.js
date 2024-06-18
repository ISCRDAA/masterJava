'use strict'
//peticiones fetch/apis/restfull

var usuarios =[];
var div_usuarios=document.querySelector("#usuarios")
var div_janet=document.querySelector("#janet")

getUsuarios()
.then(data => data.json())
.then(users => {
lista_usuarios(users);

    return getJanet();

})
.then(data => data.json())
.then(janet => {
mostrar_janet(janet.data);
})



function getUsuarios(){

    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')

}

function lista_usuarios(usuarios){
    usuarios.map((user,i)=>{
        let nombre= document.createElement('h2');
        nombre.innerHTML = i + user.name+" "+user.username;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display="none";

    });
}
function mostrar_janet(janet){
    
        let nombre= document.createElement('h2');
        nombre.innerHTML = janet.first_name+""+janet.last_name;
        div_janet.appendChild(nombre);
        document.querySelector("#janet .loading").style.display="none";


}