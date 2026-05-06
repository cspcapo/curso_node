/*
function suma(a, b) {
   return a + b;
}
function resta(a, b) {
    return a - b;
}
function calcular(a, b, action) {
    return action(a, b) ;
}
calcular (20, 10, suma)


console.log 
*/

//const frutas = ['pera', 'manzana', 'frutilla', 'durazno'];
//frutas.forEach((frutas) => console.log(frutas));
//console.log(frutas);
const precios = [20 , 100, 1200, 50, 600, 250, 15, 3, 80,350];
const precios_iva = precios.map(precio => precio * 1.21);
precios_iva.forEach(precio => {console.log(`El costo es:$ ${precio}.-Iva incluido `) })   
//}); console.log( 'El precio es: $' + precios_iva + '.- IVA incluido');

