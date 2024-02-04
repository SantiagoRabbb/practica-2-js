const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    domicilio: "Calle 123",
    profesion: "Ingeniero",
    email: "juan@example.com",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    domicilio: "Avenida 456",
    profesion: "Doctora",
    email: "maria@example.com",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    domicilio: "Plaza Principal",
    profesion: "Abogado",
    email: "carlos@example.com",
  },
  {
    id: 4,
    nombre: "Laura",
    apellido: "Martínez",
    domicilio: "Carrera 789",
    profesion: "Arquitecta",
    email: "laura@example.com",
  },
  {
    id: 5,
    nombre: "Pedro",
    apellido: "Rodríguez",
    domicilio: "Boulevard 012",
    profesion: "Profesor",
    email: "pedro@example.com",
  },
  {
    id: 6,
    nombre: "Ana",
    apellido: "Sánchez",
    domicilio: "Camino 345",
    profesion: "Diseñadora",
    email: "ana@example.com",
  },
  {
    id: 7,
    nombre: "Gabriel",
    apellido: "Fernández",
    domicilio: "Paseo 678",
    profesion: "Programador",
    email: "gabriel@example.com",
  },
  {
    id: 8,
    nombre: "Elena",
    apellido: "Ramírez",
    domicilio: "Sendero 901",
    profesion: "Enfermera",
    email: "elena@example.com",
  },
  {
    id: 9,
    nombre: "Miguel",
    apellido: "Hernández",
    domicilio: "Ruta 234",
    profesion: "Contador",
    email: "miguel@example.com",
  },
  {
    id: 10,
    nombre: "Isabel",
    apellido: "Díaz",
    domicilio: "Callejón 567",
    profesion: "Estudiante",
    email: "isabel@example.com",
  },
];

/* 
Tarea
Crear funciones que realicen las siguientes tareas
1- Mostrar una lista con los nombres completos en orden alfabetico
2- Crear tarjetas de presentacion con los datos de los usuarios
En este punto tiene que usar el document.write para que les deje algo asi

---Tarjeta de Presentacion--

nombre y apellido: el nombre de la persona

email: el email de la persona

--- --- – --- --- --- --- --- --- --- ----

si quieren poner otro dato del array de usuarios pueden hacerlo
3- Agregar un usuario mas al final de la lista
4- Actualizar el nombre de un usuario
5- Eliminar un usuario en Particular
6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar
*/

// metodo .map me permite obtener datos puntuales y me lo devuelve en un nuevo array.
// metodo .sort me permite ordenarlos alfabeticamente.
// metodo .forEach me permite recorrerlo al array

// 1- Mostrar una lista con los nombres completos en orden alfabetico
const listaNombresOrdenados = () => {
  const nombreYApellido = personas.map(
    (persona) => `${persona.apellido} ${persona.nombre}`
  );
  document.write(`<ul>`);
  nombreYApellido.sort().forEach((nombreCompleto) => {
    document.write(`<li> ${nombreCompleto} </li>`);
  });
  document.write(`</ul>`);
};

// 2- Crear tarjetas de presentacion con los datos de los usuarios
const tarjetaPresentacion = () => {
  for (let contador = 0; contador < personas.length; contador++) {
    const persona = personas[contador];

    document.write(`---Tarjeta de presentación--- <br>`);
    document.write(
      `Nombre y Apellido: ${persona.nombre} ${persona.apellido} <br>`
    );
    document.write(`E-mail: ${persona.email} <br>`);
    document.write(`Profesión: ${persona.profesion} <br>`);
    document.write(`<br>`);
  }
};

// 3- Agregar un usuario mas al final de la lista
const agregarUsuario = () => {
  const idUsuario = personas[personas.length - 1].id + 1;

  personas.push({
    id: idUsuario,
    nombre: "Santiago",
    apellido: "Rabey",
    domicilio: "Callejón Diagon",
    profesion: "Trader",
    email: "srabey@example.com",
  });
  console.log(personas);
};

// 4- Actualizar el nombre de un usuario - Se puede hacer con find(me devuelve el objeto directamente), findIndex(me devuelve la posición del elemento y reemplazo el valor) y filter(me devuelve un array)

/* const actualizarUsuario = (idUsuario) => {
  const filtrarNombre = personas.filter((persona) => persona.id == idUsuario);
  filtrarNombre[0].nombre = prompt(
    "Ingrese el nombre del usuario por favor"
  );
  console.log(filtrarNombre[0]);
  }
}; */

const actualizarUsuario = (idUsuario) => {
  // const findNombre = personas.find((persona) => persona.id == idUsuario);
  const indiceObjeto = personas.findIndex((persona) => persona.id == idUsuario);
  personas[indiceObjeto].nombre = prompt(
    "Ingrese el nombre del usuario por favor"
  );
  console.log(personas);
};

// 5- Eliminar un usuario en Particular

const borrarUsuario = (idUsuario) => {
  const filtrarUsuario = personas.filter((persona) => persona.id !== idUsuario);
  console.log(filtrarUsuario);
};

// 6- Realizar busqueda de usuario cuyo apellido coincida con el termino a buscar - includes lo que hace es devolver un booleano y verifica si el valor ingresado está dentro del array. 

const buscarApellido = (termino) => {
  const filtrarApellido = personas.filter((persona) =>
    persona.apellido.toLowerCase().includes(termino.toLowerCase())
  );
  console.log(filtrarApellido);
};
