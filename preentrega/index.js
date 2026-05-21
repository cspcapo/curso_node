// const args = process.argv.slice(2);
// const metodo = args[0];
// const dato = args[1];
// const titulo = args[2];
// const precio = args[3];
// const categoria = args[4];
const [metodo, dato, titulo, precio, categoria] = process.argv.slice(2);
let mensajeAccion;
const baseUrl = 'https://fakestoreapi.com/';

if (!metodo) {
  console.log("Debes indicar un método HTTP: GET, POST o DELETE");
  process.exit(1);
}

if (metodo.toUpperCase() === "GET") {
  const getUrl = dato ? `${baseUrl}${dato}` : baseUrl;
  mensajeAccion = dato ? `Descargando ${dato}...` : "Descargando datos del servidor...";
  console.log(mensajeAccion);
  console.log(`URL de la API: ${getUrl}`);

  fetch(getUrl)
    .then(response => response.json())
    .then(data => console.log(data));

} else if (metodo.toUpperCase() === "POST") {
  const product = {
    title: titulo,
    price: parseFloat(precio),
    category: categoria
  };
  const postUrl = dato ? `${baseUrl}${dato}` : baseUrl;
  mensajeAccion = dato ? `Creando producto ${dato}...` : "Creando nuevo registro...";

  console.log(`URL de la API: ${postUrl}`);
  fetch(postUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(response => response.json())
    .then(data => console.log(data));

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
    .then(data => {
      console.log("Item eliminado con éxito.");
      console.log(data);
    });
  

} else {
  mensajeAccion = "Error: Método HTTP no permitido.";
  console.log(mensajeAccion);
}

