
// * Metodo .join() //

// ? es un método que se utiliza para convertir los elementos de un array en una cadena de texto. Este método recorre los elementos del array y los concatena en una cadena, utilizando un separador opcional entre cada elemento.

let arreglo = ['hola', 'mundo', '!'];

// Convierte el array en una cadena de texto con separación por comas
let texto = arreglo.join(', ');  // ? El parámetro separador es opcional y especifica el separador que se utilizará entre los elementos del array en la cadena resultante. Si no se especifica ningún separador, los elementos se concatenarán sin separación.

console.log(texto); // Output: 'hola, mundo, !'







// * Metodo .slice() // 

// ? devuelve una copia de los elementos seleccionados del array original, desde el índice inicio hasta el índice fin (sin incluir el elemento en el índice fin). Si no se proporciona el parámetro fin, se seleccionan todos los elementos hasta el final del array.

let arreglo2 = ['a', 'b', 'c', 'd', 'e'];

// Obtiene una copia de los elementos desde el índice 1 hasta el índice 3 (sin incluirlo)
let copia = arreglo.slice(1, 3);

console.log(copia); // Output: ['b', 'c']
console.log(arreglo); // Output: ['a', 'b', 'c', 'd', 'e']