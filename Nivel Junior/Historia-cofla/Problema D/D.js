const sumar = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const restar = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};

const dividir = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};

const multiplicar = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

const potencia = (base, exponente) => {
  return Math.pow(parseInt(base), parseInt(exponente));
};

const raizCuadrada = (numero) => {
  return Math.sqrt(parseInt(numero));
};

const raizCubica = (numero) => {
  return Math.cbrt(parseInt(numero));
};

alert("¿Qué operación deseas realizar?");
const operacion = prompt("1: Sumar | 2: Restar | 3: Dividir | 4: Multiplicar | 5: Potencia | 6: Raíz cuadrada | 7: Raíz cúbica");

let resultado;

if (operacion === "1" || operacion === "2" || operacion === "3" || operacion === "4") {
  const num1 = prompt("Ingresa el primer número:");
  const num2 = prompt("Ingresa el segundo número:");

  if (operacion === "1") {
    resultado = sumar(num1, num2);
    alert("El resultado de la suma es: " + resultado);
  } else if (operacion === "2") {
    resultado = restar(num1, num2);
    alert("El resultado de la resta es: " + resultado);
  } else if (operacion === "3") {
    resultado = dividir(num1, num2);
    alert("El resultado de la división es: " + resultado);
  } else if (operacion === "4") {
    resultado = multiplicar(num1, num2);
    alert("El resultado de la multiplicación es: " + resultado);
  }
} else if (operacion === "5") {
  const base = prompt("Ingresa la base:");
  const exponente = prompt("Ingresa el exponente:");
  resultado = potencia(base, exponente);
  alert("El resultado de la potencia es: " + resultado);
} else if (operacion === "6") {
  const numero = prompt("Ingresa el número:");
  resultado = raizCuadrada(numero);
  alert("El resultado de la raíz cuadrada es: " + resultado);
} else if (operacion === "7") {
  const numero = prompt("Ingresa el número:");
  resultado = raizCubica(numero);
  alert("El resultado de la raíz cúbica es: " + resultado);
} else {
  alert("Operación inválida");
}