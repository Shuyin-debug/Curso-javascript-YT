
// * Metodo filter() //

// ? devuelve un nuevo array que contiene los elementos del array original que cumplen con la condición especificada en la función.

let arreglo = [1, 2, 3, 4, 5];

// Obtiene una subcolección de los elementos pares del array
let subcoleccion = arreglo.filter(function(elemento) {
  return elemento % 2 === 0;
});

console.log(subcoleccion); // Output: [2, 4]
console.log(arreglo); // Output: [1, 2, 3, 4, 5]

// ? En este ejemplo, el método filter() devuelve un nuevo array que contiene los elementos pares del array arreglo, que son '2' y '4'. La función de filtro que se pasa al método filter() comprueba si el resto de la división del elemento actual por 2 es igual a 0. Si es así, devuelve true y el elemento se incluye en la subcolección resultante. Si no, devuelve false y el elemento se excluye.





// * Metodo foreach() //

// ? El método forEach() no devuelve nada, simplemente ejecuta la función proporcionada una vez para cada elemento del array en orden ascendente.

let arreglo2 = ['a', 'b', 'c'];

// Imprime cada elemento del array en la consola
arreglo2.forEach(function(elemento) {
  console.log(elemento);
});

// Output:
// 'a'
// 'b'
// 'c'

// ? El método forEach() es una forma sencilla y conveniente de ejecutar una operación para cada elemento de un array sin tener que preocuparse por la implementación de un bucle for o while.


