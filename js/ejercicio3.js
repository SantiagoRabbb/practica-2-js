/* let cadenaTexto = prompt('Ingrese su texto: ');
const textoFinal = [];

while (cadenaTexto == true) {
  console.log(textoFinal.push([]));
  if (confirm(cadenaTexto) == true) {
    confirm(cadenaTexto);
  } else {
   console.log(textoFinal.join("- "));
  }
}; */

let cadenaTexto = prompt('Ingrese su texto:');
const textoFinal = [];

while (cadenaTexto !== null) {
  textoFinal.push(cadenaTexto);
  cadenaTexto = prompt('Ingrese su texto:');
}

console.log(textoFinal.join("-"));

// Correcciones 

/* 
1-Declaración de variables:

Has creado dos variables: cadenaTexto y textoFinal. Bien hecho.
cadenaTexto se inicializa con el resultado del prompt, lo que permite al usuario ingresar texto.
textoFinal es un array vacío que se utilizará para almacenar las cadenas ingresadas.

2-Bucle while:

Utilizas un bucle while para repetir la solicitud de entrada de texto hasta que el usuario cancele.
Sin embargo, hay un problema en la condición del bucle: while (cadenaTexto == true). Esto no funcionará como se espera. La variable cadenaTexto contendrá una cadena de texto, no un valor booleano. Por lo tanto, esta condición siempre será verdadera.
En lugar de verificar si cadenaTexto es igual a true, deberías verificar si es diferente de null (que es el valor devuelto cuando el usuario hace clic en “Cancelar”).

3-Método push y confirmación:

Dentro del bucle, utilizas console.log(textoFinal.push([])). Esto no es necesario y no tiene sentido. El método push agrega un elemento al final del array, pero no necesitas imprimir su resultado.
Luego, verificas si el resultado de confirm(cadenaTexto) es verdadero. Sin embargo, no estás almacenando este resultado en ninguna variable. Deberías hacerlo para usarlo más adelante.

4-Concatenación y salida:

Cuando el usuario hace clic en “Cancelar”, intentas mostrar las cadenas concatenadas con un guión. Sin embargo, estás utilizando console.log(textoFinal.join("- ")), que también es incorrecto. Debería ser console.log(textoFinal.join("-")); (sin el espacio después del guión).
Además, no estás agregando la cadenaTexto actual al array textoFinal. Deberías hacerlo dentro del bucle antes de verificar la confirmación.
 */