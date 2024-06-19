'use strict'
//peticiones fetch/apis/restfull

var usuarios =[];
var div_usuarios=document.querySelector("#usuarios")
var div_janet=document.querySelector("#janet")
var div_profesor= document.querySelector("#profesor");

getUsuarios()
.then(data => data.json())
.then(users => {
lista_usuarios(users);

   
    return getInfo();
})
.then(data =>{
    div_profesor.innerHTML=data;
    return getJanet();
})
.then(data => data.json())
.then(janet => {
    mostrar_janet(janet.data);
})
.catch(err=>{
    alert("error en las peticiones: "+err.message);
})

    





function getUsuarios(){

    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getInfo(){
    var profesor ={
        nombre:"Manuel",
        apellido:"Torres",
        edad:29,
        pelicula:"Batman"
    };

    return new Promise((resolve, reject) => {
        var profesor_string="";
       

        setTimeout(function(){
            profesor_string=JSON.stringify(profesor);
            if(typeof profesor_string !="string" || profesor_string=="")return reject("Error");
                return resolve(profesor_string);
                

        },3000);

        
    });
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')

}

function lista_usuarios(usuarios){
    usuarios.map((user,i)=>{
        let nombre= document.createElement('h2');
        nombre.innerHTML = i+ ".- " + user.name+" "+user.username;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display="none";

    });
}
function mostrar_janet(janet){
    
        let nombre= document.createElement('h2');
        let avatar= document.createElement('img');
        nombre.innerHTML = janet.first_name+""+janet.last_name;
        avatar.src= janet.avatar;
        avatar.width="100";
        
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display="none";


}