
//////// * Metodo Concat() //////////

concat()

// ? el método concat() se utiliza para combinar dos o más arrays y crear un nuevo array que contiene los elementos de los arrays originales. Este método no modifica los arrays existentes, sino que devuelve un nuevo array con los elementos combinados.

//Ejemplo 

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var arrayConcatenado = array1.concat(array2);

console.log(arrayConcatenado);
// Output: [1, 2, 3, 4, 5, 6]








////// * Metodo startsWith()  //////////

startsWith() 

//  La sintaxis básica del método startsWith() es la siguiente:

cadena.startsWith(valor, posición)

// ? Donde cadena es la cadena de texto que se quiere evaluar, valor es el valor que se desea verificar si es el inicio de la cadena, y posición es un argumento opcional que especifica la posición dentro de la cadena desde donde se debe iniciar la búsqueda. El método startsWith() devuelve true si la cadena comienza con el valor especificado, y false en caso contrario. La comparación se realiza de manera sensible a mayúsculas y minúsculas, es decir, distingue entre letras mayúsculas y minúsculas.

// ejemplo de cómo se utiliza el método startsWith():

var cadena = "Hola, ¿cómo estás?";
console.log(cadena.startsWith("Hola"));
// Output: true

console.log(cadena.startsWith("hola"));
// Output: false

console.log(cadena.startsWith("¿", 4));
// Output: true









////// * Metodo endsWith()  //////////

endsWith()

// ? El método endsWith() se utiliza para verificar si una cadena de texto termina con un valor específico. Nos permite comprobar si el final de una cadena coincide con el valor que especificamos.

// La sintaxis básica del método endsWith() es la siguiente: 

cadena.endsWith(valor, longitud)

// ? Aquí, cadena es la cadena de texto en la que queremos buscar, valor es el texto que queremos verificar si coincide con el final de la cadena, y longitud es un argumento opcional que nos permite especificar la longitud de la cadena a considerar para la verificación. El método endsWith() devuelve true si la cadena termina con el valor especificado y false en caso contrario.

// Ejemplo :

var cadena = "Hola, ¿cómo estás?";

console.log(cadena.endsWith("estás?"));
// Output: true

console.log(cadena.endsWith("Estás?"));
// Output: false

console.log(cadena.endsWith("Hola", 4));  // ? En este caso, cadena.endsWith("Hola", 4) verifica si los últimos 4 caracteres de la cadena cadena coinciden con "Hola".
// Output: true









////// * Metodo include()  //////////

include()

// ? El método includes() se utiliza para verificar si una cadena de texto contiene un valor específico. Nos permite comprobar si un valor dado está presente dentro de una cadena. 

// La sintaxis básica del método includes() es la siguiente:
cadena.includes(valor, posición) 

// ? Aquí, cadena es la cadena de texto en la que queremos buscar, valor es el texto que queremos verificar si está presente, y posición es un argumento opcional que nos permite especificar la posición dentro de la cadena desde donde se debe iniciar la búsqueda. El método includes() devuelve true si la cadena contiene el valor especificado y false en caso contrario.

//  ejemplo para entenderlo mejor: 

var cadena = "Hola, ¿cómo estás?";

console.log(cadena.includes("cómo"));
// Output: true

console.log(cadena.includes("Hola"));
// Output: true

console.log(cadena.includes("Hola", 6));
// Output: false









////// * Metodo IndexOf()  //////////

indexOf()

// ? El método indexOf() se utiliza para obtener la posición de la primera aparición de un valor específico dentro de una cadena de texto. Nos permite encontrar la ubicación del valor buscado dentro de la cadena.

// La sintaxis básica del método indexOf() es la siguiente: 
cadena.indexOf(valor, posición)

// ? Aquí, cadena es la cadena de texto en la que queremos buscar, valor es el texto que queremos encontrar y obtener su posición, y posición es un argumento opcional que nos permite especificar la posición dentro de la cadena desde donde se debe iniciar la búsqueda. El método indexOf() devuelve el índice de la primera aparición del valor especificado dentro de la cadena, o -1 si el valor no se encuentra.

// ejemplo para entenderlo mejor:

var cadena = "Hola, ¿cómo estás?";

console.log(cadena.indexOf("cómo"));  // ? En el primer ejemplo, el valor "cómo" se encuentra en la posición 7 de la cadena cadena, por lo que cadena.indexOf("cómo") devuelve 7.
// Output: 7

console.log(cadena.indexOf("Hola")); // ? En el segundo ejemplo, el valor "Hola" se encuentra en la posición 0 de la cadena cadena, por lo que cadena.indexOf("Hola") devuelve 0.
// Output: 0

console.log(cadena.indexOf("Hola", 6)); // ? En el tercer ejemplo, cadena.indexOf("Hola", 6) busca la primera aparición de "Hola" a partir de la posición 6 en cadena. Sin embargo, en este caso, "Hola" no se encuentra a partir de la posición 6, por lo que el resultado es -1.
// Output: -1








////// * Metodo lastIndexOf()  //////////

lastIndexOf()

//? El método lastIndexOf() se utiliza para obtener la posición de la última aparición de un valor específico dentro de una cadena de texto. Nos permite encontrar la ubicación del último valor buscado dentro de la cadena.

//La sintaxis básica del método lastIndexOf() es la siguiente: 
cadena.lastIndexOf(valor, posición)

//? Aquí, cadena es la cadena de texto en la que queremos buscar, valor es el texto que queremos encontrar y obtener su posición, y posición es un argumento opcional que nos permite especificar la posición dentro de la cadena desde donde se debe iniciar la búsqueda en sentido inverso. El método lastIndexOf() devuelve el índice de la última aparición del valor especificado dentro de la cadena, o -1 si el valor no se encuentra.

//  ejemplo para entenderlo mejor:

var cadena = "Hola, ¿cómo estás?";

console.log(cadena.lastIndexOf("estás")); // ? En el primer ejemplo, el valor "estás" se encuentra en la posición 13 de la cadena cadena, por lo que cadena.lastIndexOf("estás") devuelve 13. los espacios en blanco tambien cuentan como caracteres
// Output: 13

console.log(cadena.lastIndexOf("Hola")); // ? En el segundo ejemplo, el valor "Hola" se encuentra en la posición 0 de la cadena cadena, por lo que cadena.lastIndexOf("Hola") devuelve 0.
// Output: 0

console.log(cadena.lastIndexOf("Hola", 6)); // ? En el tercer ejemplo, cadena.lastIndexOf("Hola", 6) busca la última aparición de "Hola" a partir de la posición 6 en cadena. Dado que "Hola" no se encuentra después de la posición 6, la búsqueda retrocede y encuentra la última aparición de "Hola" en la posición 0, por lo que el resultado es 0.
// Output: 0





/// * Subir resto de ejemplo que quedan /////








