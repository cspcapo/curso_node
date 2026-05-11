 //fetch("https://rickandmortyapi.com/api/character")
  
  //  .then((response) => {
  //    console.log(response);
  //    return response.json();
  //  })
  //  .then((data) => console.log((data.results.slice(0, 5))))
  //  .catch((error) => console.log("Error:", error));

  async function consultarpersonajes() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results.slice(0, 5));
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Consulta finalizada')
  }

}
consultarpersonajes();