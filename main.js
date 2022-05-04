// Crear un formulario con mínimo 10 campos de datos obtener 
// la información y por medio de un botón ejecutar un función 
// que muestre los datos capturados



// JS
 /*function mostrar(){
     console.log("enviar");
 }
*/
   // Variable to hold request
   var data = [];
   $("#dataForm").submit(function(event) {
       event.preventDefault();
       data.push($(this).find('input[name="data"]').val());
       alert("Dato Añadido");
   });

   function processData() {
       alert(data);
   }

// EMC
// document.querySelector("#btn").addEventListener("click", function(e){
//     console.log(e);
// })
