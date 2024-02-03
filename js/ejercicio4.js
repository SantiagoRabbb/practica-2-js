/* let numeros = prompt('Ingrese números para ver el resultado: ')
const sumaTotal = [];

while (numeros !== null) {
  if (numeros == NaN) {
    alert('El número ingresado no es un número');
  } else {
    sumaTotal.push(numeros);
    numeros = prompt('Ingrese números para ver el resultado: ');
  }
}

for (let i = 0; i < sumaTotal.length; i++) {
  numero = numeros [i];
  suma += numero;
} */

let numeros = prompt('Ingrese números para ver el resultado: ');
const sumaTotal = [];
let suma = 0;

while (numeros !== null) {
  if (isNaN(numeros)) {
    alert('El valor ingresado no es un número');
  } else {
    sumaTotal.push(Number(numeros));
    numeros = prompt('Ingrese números para ver el resultado: ');
  }
}

for (let i = 0; i < sumaTotal.length; i++) {
  suma += sumaTotal[i];
}

alert(`La suma total de los números ingresados es ${suma}`);

// Errores: 
/* 
En tu script, el error se encuentra en la condición del primer if dentro del bucle while. La condición numeros == NaN siempre será falsa, incluso si el usuario ingresa un valor no numérico. Para verificar si un valor es numérico, puedes usar la función isNaN() de JavaScript. Además, la variable suma no está definida antes del bucle for, por lo que deberías inicializarla en 0 antes de comenzar a sumar los números. */