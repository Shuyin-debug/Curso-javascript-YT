
"use strict";

const definirCompra = (n) => {
  let din = prompt(`Dinero de ${n}: `);

  if (din >= 0.6 && din < 1) return `${n}: helado de agua`;

  if (din >= 1 && din < 1.6) return `${n}: helado de crema`;

  if (din >= 1.6 && din < 1.7) return `${n}: helado de heladix`;

  if (din >= 1.7 && din < 1.8) return `${n}: helado de heladovich`;

  if (din >= 1.8 && din < 2.9) return `${n}: helado de helardo`;

  if (din >= 2.9) return `${n}: helado de confites o pote de 1/4kg`;

  return `${n}: No te alcanza para ningún helado, pobre de mierda`;
};

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));

/* 

"use strict"; es una directiva que activa el modo estricto de JavaScript. Esto impone reglas adicionales y evita el uso de malas prácticas. Es una buena práctica incluir esta directiva al comienzo de los archivos JavaScript.

La función definirCompra se define utilizando la sintaxis de funciones de flecha ((n) => { ... }). Recibe un parámetro n que representa el nombre de la persona que quiere comprar el helado.

Se utiliza let din = prompt(Dinero de ${n}: ); para solicitar al usuario que ingrese la cantidad de dinero que tiene para comprar el helado. El mensaje del prompt incluirá el nombre de la persona.

Luego, se utilizan múltiples condicionales if para verificar el valor de din y determinar qué tipo de helado se puede comprar.

Cada condicional verifica si din está dentro de un rango específico. Por ejemplo, if (din >= 0.6 && din < 1) verifica si din es mayor o igual a 0.6 y menor que 1. Si la condición se cumple, se devuelve un string que indica el tipo de helado que se puede comprar.

Si ninguna de las condiciones anteriores se cumple, se llega al último return que devuelve un mensaje indicando que no se puede comprar ningún helado.

Finalmente, se llaman a la función definirCompra con diferentes nombres de personas ("Cofla", "Pedro" y "Roberto") utilizando console.log para imprimir los resultados en la consola. 

*/
