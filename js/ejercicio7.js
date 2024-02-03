/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

// const piramideInvertida = prompt(
//   "Ingrese un número no mayor a 50 para crear una pirámide invertida"
// );

// if (piramideInvertida <= 50) {
//   for (let i = piramideInvertida; i >= piramideInvertida; i--) {
//     for (let j = piramideInvertida - 1; j >= i; j--) {
//       document.write(j);
//     }
//     document.write(i);
//   }
//   document.write(`<br>`);
// } else {
//   alert("El número ingresado es mayor a 50");
// }

/* const piramideInvertida = prompt(
  "Ingrese un número no mayor a 50 para crear una pirámide invertida"
); */

/* const numero = prompt(
  "Ingrese un número no mayor a 50 para crear una pirámide invertida"
);

for (let i = numero - 1; i >= numero; i--) {
  document.write(i);
  for (let j = i - 1; j >= i; j--) {
    document.write(j);
  }
} */

const num = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (num <= 0 || num > 50 || isNaN(num)) {
  alert("El número ingresado no es válido.");
} else {
  for (let i = num; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i;
    }
    document.write(line);
    document.write(`<br>`);
  }
}
