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
  constructor(nombre, apellido, dni, domicilio, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
    this.telefono = telefono;
  }

  mostrarDatos(){
    console.log(`${this.nombre} ${this.apellido}`);
  }
};

class Admin extends Persona{
  constructor(nombre, apellido, dni, domicilio, telefono, role){
    super(nombre, apellido, dni, domicilio, telefono);
    this.role = role;
  }

  mostrarRole(){
    console.log(`El role es: ${this.role}`);
  }
}

const persona1 = new Persona(
  "Andres",
  "Perlo",
  "15468936",
  "Las Talitas",
  "22346513",
);

const admin = new Persona(
  "Jose",
  "Merlo",
  "15477936",
  "Lomas de Tafí",
  "22666321",
);

// instanciar la clase me retorna un objeto
const personaUno = new Persona(
  'Santiago',
  'Rabey', 
  '35642365', 
  'Lomas de Tafi', 
  '3816546544'
  );

persona1.mostrarDatos()
const persona2 = new Persona(
'Jorge', 
'Mercado', 
'35123236', 
'Las Talitas', 
'3513365232'
);
  
console.log(persona1.saludar());
console.log(admin.mostrarDatos());

// Ejercicio a practicar

/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos */

class Cuenta{
  constructor(){
    this.titular = 'Alex';
    this.saldo = 0;
  }

  ingresar(cantidad){
    this.saldo = this.saldo + cantidad;
    console.log(`El saldo es igual a ${this.saldo}`)
  }

  extraer(cantidad){
    let resultado = this.saldo - cantidad;
    if(resultado > 0){
      this.resultado = resultado
    }else{
      console.log(`No podes retirar, tu saldo es de ${this.saldo}`) 
    }
  }

  informar(){
    console.log(`El saldo es igual a ${this.saldo}`)
  }
}

const cuenta1 = new Cuenta()
cuenta1.informar();
cuenta1.ingresar(1500);
cuenta1.extraer(1000);
cuenta1.informar();