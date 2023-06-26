
// funcion para aumentar el tamaño de mi nombre
function agrandarNombre(identificador){
    let nombre = document.getElementById(identificador);
    nombre.style.fontSize = "30px";
}
// funcion para achicar el tamaño de mi nombre
function disminuirNombre(identificador){
    let nombre = document.getElementById(identificador);
    nombre.style.fontSize = "25px";
}

// funcion para que la barra de enlaces no se pierda y no interfiera
window.onscroll = function(){
    let header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

/* Funcion para que seleccione los elementos del header y los identifique mediante una transicion de cambio de color en elemento correspondiente (vease: estilos.css: "navegador hacia elementos" ) */
let enlaces = document.querySelectorAll(".miEnlace");

enlaces.forEach(function(enlace) {
  enlace.addEventListener("click", function() {
    let elementoId = enlace.getAttribute("data-target");
    let elemento = document.getElementById(elementoId);
    
    let colorOriginal = elemento.style.backgroundColor = "#ededed";
    
    elemento.style.backgroundColor = "#e01e37";
    
    setTimeout(function() {
      elemento.style.backgroundColor = colorOriginal;
    }, 400);
  });
});