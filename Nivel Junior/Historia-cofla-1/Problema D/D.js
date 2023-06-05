
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


alert("¿Qué operación deseas realizar?");
const operacion = prompt("1: Sumar | 2: Restar | 3: Dividir | 4: Multiplicar");

const num1 = prompt("Ingresa el primer número:");
const num2 = prompt("Ingresa el segundo número:");

let resultado;

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
} else {
  alert("Operación inválida");
}
