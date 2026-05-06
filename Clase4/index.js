/*const user = {
   nombre: 'Jhon' ,
   apellido: 'Doe' ,
   edad: 24 ,
   domicilio: 'Calle Falsa 123' ,
   casado: false ,
   saludar: () => console.log(`Hola!!!soy ${user.nombre} ${user.apellido} y tengo ${user.edad} años`)

};
//console.log(user.nombre);
user.saludar() ;

class user {
   constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
   }
   login(inputEmail, password) {
    return this.email === inputEmail && this.password === password
      ? "Login successful"
      : "Password Invalido";
   }

}
*/
const automoviles = [
  { id: 1, marca: "Toyota", modelo: "Corolla", anio: 2020, color: "Blanco" },
  { id: 2, marca: "Honda", modelo: "Civic", anio: 2019, color: "Negro" },
  { id: 3, marca: "Ford", modelo: "Mustang", anio: 2021, color: "Rojo" },
  { id: 4, marca: "Chevrolet", modelo: "Spark", anio: 2018, color: "Azul" },
  { id: 5, marca: "Nissan", modelo: "Sentra", anio: 2022, color: "Gris" },
  { id: 6, marca: "Volkswagen", modelo: "Golf", anio: 2017, color: "Verde" },
  { id: 7, marca: "Hyundai", modelo: "Tucson", anio: 2023, color: "Plata" },
  { id: 8, marca: "Kia", modelo: "Sportage", anio: 2016, color: "Naranja" },
  { id: 9, marca: "BMW", modelo: "Serie 3", anio: 2024, color: "Blanco" },
  { id: 10, marca: "Mercedes", modelo: "Clase C", anio: 2015, color: "Negro" },
];

console.log(automoviles);

// let total = 0;

// automoviles.forEach(({ color }) => {
//   //   console.log(color);
//   if (color == "Negro") {
//     total++;
//   }
// });

// console.log(total);

// ---

// function colorAutomovil(color) {
//   let count = 0;
//   for (const { color: autoColor } of automoviles) {
//     if (autoColor === color) {
//       count++;
//     }
//   }
//   console.log(
//     `La cantidad de automoviles con el color '${color}' son: ${count}`,
//   );
// }

// colorAutomovil('Blanco')