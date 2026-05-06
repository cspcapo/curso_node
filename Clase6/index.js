// function taskAsync(callback) {
// setTimeout(function() {
// console.log('Tarea asincrónica completada.');
// callback();
// }, 3000)
// };
// console.log('Inicio de la tarea.');
// taskAsync(function() {
// console.log('Fin de la tarea.');
// });
// function taskAsync() {
// return new Promise(function (resolve, reject) {
// setTimeout(function() {
// if (Math.random() < 0.5) {
// resolve('Tarea asincrónica completada.')
// } else {
// reject(new Error('Tarea asincrónica fallida.'))
// }
// }, 1500);
// });
// }
const result = taskAsync();
 console.log(result); // Promise { <pending> }
 console.log('Inicio de la tarea.');
 taskAsync()
 .then((result) => console.log(result))
 .catch((error) => console.log(error))
 .finally(() => console.log('Fin de la tarea.'));
async function executeAsyncTask () {
console.log('Inicio de la tarea.');
try {
const result = await taskAsync();
console.log(result);
} catch (error) {
console.log(error);
} finally {
console.log('Fin de la tarea.')
}
}
executeAsyncTask();