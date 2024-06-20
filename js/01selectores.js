$(document).ready(function(){
    console.log("Estamos listos !!")

var amarillo=$("#amarillo").css("background","red")
                            .css("color","white");
var rojo=$("#rojo").css("background","green")
                    .css("color","red");

var sin_borde=$(".sin_borde").click(function(){
    console.log("Click dado ");
    $(this).addClass('zebra');
});

var zebra=$(".zebra").css("padding","5px");



console.log(zebra);
console.log(amarillo);


//selectores de etiquetas;
var parrafos= $('p').css("cursor","pointer");


parrafos.click(function(){
    var that = $(this)

    if(!that.hasClass('grande') ){
        that.addClass('grande')
    }else{
        that.removeClass('grande');
    }
    
})

//slectores de atributos
$('[title="google"]').css("background","#ccc");
$('[title="facebook"]').css("background","blue")


//otros

//$("p,a").addClass('margen-superior')
 var busqueda= $("#caja").parent().find('[title="google"]');
 console.log(busqueda);

})