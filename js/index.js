// un poco sobre obejos
const auto = {
  // clave: valor
  marca: "Fiat", 
  modelo: "Cronos",
  precio: "2000000",
  puertas: "5",
  encender: () => {
    console.log("encendido");
  },
};

// obtener un valor del objeto
console.log(auto.marca);
console.log(auto["marca"]);

// agregar o editar una propiedad
auto.anio ="2020"; 
console.log(auto);
auto.marca = "Toyota";
console.log(auto);

// eliminar
delete auto.precio;
console.log(auto);

//recorrer el objeto con forIn y forOf / for y forEach es para arrays

for (const clave in auto) {
  console.log(auto[clave]);
};

for (const clave in auto) {
  if (clave !== "modelo") {
    console.log(auto[clave]);
  }
};

// metodos en el objeto - llamar a la función
auto.encender();

// La base de datos es un array enorme y cada dato y registro en un objeto.

const baseDeDatos = [
  {
    id: 1,
    nombre: "Andres",
    apellido: "Perlo",
    dni: "12345678",
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Lopez",
    dni: "12315665",
  },
  {
    id: 3,
    nombre: "Santiago",
    apellido: "Rabey",
    dni: "98654321",
  },
];
console.log(baseDeDatos);
// se recorre un array con objetos igual que un array normal

// Clase 

class Persona{
  constructor(){
    nombre;
    apellido,
    dni;
    domicilio;
    telefono;
  }
}
// instanciar la clase me retorna un objeto
const persona1 = new Persona()