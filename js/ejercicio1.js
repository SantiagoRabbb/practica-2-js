const ingresoEdad = Number(prompt('Ingrese su edad por favor: '));

if (ingresoEdad >= 18) {
  alert('Ya puede conducir')
} else if (ingresoEdad < 18) {
  alert('Todavía no podes manejar')
} else {
  alert ('Ingrese un número válido')
};
