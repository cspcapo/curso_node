let args = process.argv.slice(2);
let metodo = args[0];
let dato = args[1] 
let mensajeAccion;
const baseUrl = 'https://fakestoreapi.com/';

if (!metodo) {
  console.log("Debes indicar un método HTTP: GET, POST o DELETE");
  process.exit(1);
}

if (metodo.toUpperCase() === "GET") {
  const geturl = dato ? `${baseUrl}${dato}` : baseUrl;
  mensajeAccion = dato ? `Cargando producto ${dato}...` : "Cargando datos del servidor...";
  console.log(mensajeAccion);
  console.log(`URL de la API: ${geturl}`);
fetch(geturl)
  .then(response => response.json())
  .then(data => console.log(data));

} else if (metodo.toUpperCase() === "POST") {
  mensajeAccion = `Creando un nuevo registro... ${args[1]}`;
  console.log(mensajeAccion);

} else if (metodo.toUpperCase() === "DELETE") {
 
  const delUrl = dato ? `${baseUrl}${dato}` : baseUrl;  
  mensajeAccion = dato ? `Eliminando producto ${dato}...` : "Eliminando Item...";
  console.log(mensajeAccion);
  console.log(delUrl);
  fetch(delUrl, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));

} else {
  mensajeAccion = "Error: Método HTTP no permitido.";
  console.log(mensajeAccion);
}

