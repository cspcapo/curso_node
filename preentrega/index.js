let args = process.argv.slice(2);
let metodo = args[0];
let dato = args[1] 
let mensajeAccion;
switch (metodo.toUpperCase()) {
  case "GET PRODUCTS":
    mensajeAccion = "Recuperando datos del servidor...";
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
    break;
  case "POST":
    mensajeAccion = `Creando un nuevo registro... ${args[1]}`;
    break;
  case "PUT":
    mensajeAccion = ` Actualizando la información existente... ${args[1]}`;
    break;  
  case "DELETE":
    mensajeAccion = " Eliminando el recurso seleccionado...";
    break;  
  default:
    mensajeAccion = " Error: Método HTTP no permitido.";
}

console.log(mensajeAccion);