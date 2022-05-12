// Crear un formulario con mínimo 10 campos de datos obtener 
// la información y por medio de un botón ejecutar un función 
// que muestre los datos capturados


// JS
 /*function mostrar(){
     console.log("enviar");
     
 }
 window.onload = function() {
  
    miNombre= "<h5>" + document.rellenar.nombre.value + "</h5>"
    document.rellenar.nombre.onclick = mostrar
    escribir.innerHTML = miNombre;
    }*/

 

 // EMC
 const mostrar = function(mensaje="No enviado",callback) {
    document.querySelector(".mensaje").insertAdjacentHTML("beforeend", `<b>${mensaje} : <span>${callback.value}</span><br>`);
};
addEventListener("submit", function (e){
    let input = e.target;
    document.querySelector(".mensaje").innerHTML = null;
    mostrar(" Mi Nombre", input.nombre);
    mostrar(" Mi Apellido", input.apellido);
    mostrar(" Mi Cedula", input.cedula);
    mostrar(" Mi Fecha Nac", input.fechaNac);
    mostrar(" Mi PaisNac", input.paisNac);
    mostrar(" Mi Email", input.email);
    mostrar(" Mi Telefono", input.telefono);
    mostrar(" Mi Direccion", input.direccion);
    mostrar(" Mi Mensaje", input.mensaje);
    e.preventDefault();
});

/* document.querySelector("#btn").addEventListener("click", function(e){
   console.log(e);
// })
