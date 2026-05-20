let args = process.argv.slice(2);
let metodo = args[0];
let dato = args[1] 
let mensajeAccion;

if (!metodo) {
  console.log("Debes indicar un método HTTP: GET, POST, PUT o DELETE");
  process.exit(1);
}

if (metodo.toUpperCase() === "GET") {
  const baseUrl = 'https://fakestoreapi.com/';
  const geturl = dato ? `${baseUrl}/${dato}` : baseUrl;
  mensajeAccion = dato ? `Cargando producto ${dato}...` : "Cargando datos del servidor...";
  console.log(mensajeAccion);
  console.log(`URL de la API: ${geturl}`);
fetch(geturl)
  .then(response => response.json())
  .then(data => console.log(data));

} else if (metodo.toUpperCase() === "POST") {
  mensajeAccion = `Creando un nuevo registro... ${args[1]}`;
  console.log(mensajeAccion);
} else if (metodo.toUpperCase() === "PUT") {
  mensajeAccion = `Actualizando la información existente... ${args[1]}`;
  console.log(mensajeAccion);
} else if (metodo.toUpperCase() === "DELETE") {
  mensajeAccion = "Eliminando el recurso seleccionado...";
  console.log(mensajeAccion);
} else {
  mensajeAccion = "Error: Método HTTP no permitido.";
  console.log(mensajeAccion);
}