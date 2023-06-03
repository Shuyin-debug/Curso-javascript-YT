
// ! Explicacion While




// ? El bucle while es una estructura de control que ejecuta un bloque de código mientras una condición especificada sea verdadera. La sintaxis es la siguiente:

while (condición) {
    // código a ejecutar
  }

  
// ? El bucle while evalúa la condición antes de ejecutar el bloque de código. Si la condición es verdadera, el bloque de código se ejecuta. Después de cada ejecución del bloque, la condición se vuelve a evaluar y, si sigue siendo verdadera, se vuelve a ejecutar el bloque. Este proceso continúa hasta que la condición se evalúa como falsa.

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

// * En este ejemplo, el bucle while se ejecutará mientras la variable "contador" sea menor que 5. En cada iteración, se imprimirá el valor actual de "contador" en la consola y luego se incrementará en 1. El bucle se ejecutará cinco veces y mostrará los números del 0 al 4 en la consola.





// ! Explicaion do while 

// ? El bucle do...while es una estructura de control similar al bucle while, pero con una diferencia clave: la condición se evalúa después de ejecutar el bloque de código.

do {
    // código a ejecutar
  } while (condición);

  
// EJEMPLO

let numero;

do {
  numero = prompt("Ingresa un número:");
} while (numero <= 10);
