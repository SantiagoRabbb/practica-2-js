/* Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
 */

// Debo realizar un script que al finalizar me escriba en mi documento una pirámide con document.write. La misma debe ser realizada con un for anidado. 


for (let contador = 1; contador <= 30; contador++) {
  for (let j = 0; j < contador; j++) {
    document.write(contador);
  }
  document.write(`<br>`)
}