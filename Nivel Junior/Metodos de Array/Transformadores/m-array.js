// * Metodo .pop() //

// ? En JavaScript, el método pop() se utiliza para eliminar y devolver el último elemento de un array. Este método modifica el array original, reduciendo su longitud

let miArray = ["manzana", "banana", "naranja"];
let ultimoElemento = miArray.pop();

console.log(miArray); // Output: ["manzana", "banana"]
console.log(ultimoElemento); // Output: "naranja"

// ? si se utiliza el método pop() en un array vacío, se devolverá undefined.







// * Metodo .push() //

// ? se utiliza para agregar uno o más elementos al final de un array. Este método modifica el array original, aumentando su longitud en la cantidad de elementos agregados.

let miArray2 = ["manzana", "banana"];
miArray2.push("naranja", "pera");

console.log(miArray2); // Output: ["manzana", "banana", "naranja", "pera"]






// * Metodo unshift() //

// ? se utiliza para agregar uno o más elementos al inicio de un array. Este método modifica el array original, aumentando su longitud en la cantidad de elementos agregados.

let miArray3 = ["naranja", "pera"];
miArray3.unshift("manzana", "banana");

console.log(miArray3); // Output: ["manzana", "banana", "naranja", "pera"]






// * Metodo sort() //

// ? se utiliza para ordenar los elementos de un array. Este método modifica el array original, reordenando sus elementos según un criterio de ordenamiento.

// La sintaxis básica del método sort() es la siguiente:

array.sort([compareFunction])

// ? Donde array es el nombre del array que se desea ordenar, y compareFunction es una función opcional que define el criterio de ordenamiento. Si se omite compareFunction, los elementos del array se ordenarán como cadenas de texto, en orden alfabético ascendente.

// EJ

let miArray4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
miArray4.sort();

console.log(miArray4); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// EJ con una funcion 

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Pedro", edad: 35 }
  ];
  
  personas.sort(function(a, b) {
    if (a.edad < b.edad) {
      return -1;
    } else if (a.edad > b.edad) {
      return 1;
    } else {
      return 0;
    }
  });
  
  console.log(personas);
  console.log(personas);

// Output:
// [
//   { nombre: "María", edad: 20 },
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Juan", edad: 30 },
//   { nombre: "Pedro", edad: 35 }
// ]

// ? para entender mejor lo que hace la funcion

/*

| a              | b              | Comparación |
|----------------|----------------|-------------|
| { nombre: "Ana", edad: 25 }    | { nombre: "Juan", edad: 30 }   | -1          |
| { nombre: "Juan", edad: 30 }   | { nombre: "María", edad: 20 }  | 1           |
| { nombre: "María", edad: 20 }  | { nombre: "Pedro", edad: 35 }  | -1          |
| { nombre: "Pedro", edad: 35 }  | { nombre: "Juan", edad: 30 }   | 1           |

*/





// * Metodo .splice() //

// ? modifica el array original y devuelve un nuevo array con los elementos eliminados. Si no se eliminan elementos, el método devuelve un array vacío.

let arreglo = [1, 2, 3, 4, 5];

// Elimina 2 elementos a partir del índice 2
let elementosEliminados = arreglo.splice(2, 2);  // ? El primer valor es la posicion en el array y el segundo es la cantidad de elementos que se van a eliminar

console.log(arreglo); // Output: [1, 2, 5]
console.log(elementosEliminados); // Output: [3, 4]




// * 



