
let animales = ["gato" , "perro" , "dinosaurio"] ;

for ( animal in animales ) {

}

for ( animal of animales ) {

}








// ! Explicacion del for in

// ? El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto. Su sintaxis es la siguiente:

for (variable in objeto) {
    // código a ejecutar
  }


// ? En cada iteración del bucle, la variable toma el nombre de una propiedad del objeto. Puedes utilizar esa variable para acceder al valor de la propiedad correspondiente. Aquí hay un ejemplo:

let persona = {
    nombre: "Victor",
    edad: 30,
    ciudad: "Madrid"
  };
  
  for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
  }


// * En este ejemplo, el bucle for...in itera sobre las propiedades del objeto "persona". En cada iteración, la variable "propiedad" toma el nombre de una propiedad del objeto, como "nombre", "edad" y "ciudad". Dentro del bucle, se utiliza la variable "propiedad" para acceder al valor correspondiente del objeto.

// * Cuando se utiliza persona[propiedad], se está accediendo al valor de la propiedad cuyo nombre está almacenado en la variable "propiedad". Es decir, si la variable "propiedad" tiene el valor "nombre", entonces persona[propiedad] es equivalente a persona['nombre'], que accede al valor de la propiedad "nombre" en el objeto "persona".







// ! explicacion for of 


// ? El bucle for...of se utiliza para iterar sobre los elementos de un objeto iterable, como un array, una cadena de texto o un objeto Map. Su sintaxis es la siguiente:

for (variable of iterable) {
    // código a ejecutar
  }

  
// ? El bucle for...of recorre cada elemento del objeto iterable en orden, sin necesidad de preocuparse por los índices o propiedades del objeto. Se encarga de acceder directamente a los valores del iterable. Es importante destacar que el bucle for...of solo se puede utilizar con objetos iterables. Un objeto se considera iterable si implementa el protocolo de iteración, lo cual significa que debe tener un método llamado Symbol.iterator que permita iterar sobre sus elementos. Los arrays, las cadenas de texto y los objetos Map son ejemplos de objetos iterables en JavaScript. En resumen, el bucle for...of es una forma sencilla de recorrer los elementos de un objeto iterable sin preocuparse por los índices o propiedades del objeto. Es especialmente útil cuando solo necesitas acceder a los valores y no a los detalles de la estructura del iterable.
  