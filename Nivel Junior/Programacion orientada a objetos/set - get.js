


// ! Explicacion de como funciona del setter y el getter 


class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }
  
    // Getter para obtener el nombre
    get nombre() {
      return this._nombre;
    }
  
    // Setter para establecer el nombre
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    // Getter para obtener la edad
    get edad() {
      return this._edad;
    }
  
    // Setter para establecer la edad
    set edad(nuevaEdad) {
      if (nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      } else {
        console.log("La edad no puede ser un valor negativo.");
      }
    }
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona("Juan", 25);
  
  // Obtener el valor de la propiedad nombre utilizando el getter
  console.log(persona.nombre); // Output: Juan
  
  // Establecer el valor de la propiedad nombre utilizando el setter
  persona.nombre = "Pedro";
  
  // Obtener el nuevo valor de la propiedad nombre utilizando el getter
  console.log(persona.nombre); // Output: Pedro
  
  // Obtener el valor de la propiedad edad utilizando el getter
  console.log(persona.edad); // Output: 25
  
  // Establecer el valor de la propiedad edad utilizando el setter
  persona.edad = -5; // Esto generará un mensaje de error en la consola
  
  // Obtener el nuevo valor de la propiedad edad utilizando el getter
  console.log(persona.edad); // Output: 25 (no se modificó debido al valor inválido)
  