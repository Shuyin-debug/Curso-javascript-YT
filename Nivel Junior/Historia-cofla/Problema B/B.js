
let free = false;

const validarCliente = (time) => {
  let edad = prompt("¿Cuál es tu edad?");
  if (edad >= 18) {
    if (time >= 2 && time < 7 && !free) {
      alert("Podés pasar gratis porque sos la primera persona después de las 2 AM");
      free = true;
    } else {
      alert("Puedes pasar, pero tienes que pagar la entrada.");
    }
  } else {
    alert("Lo siento, eres menor de edad. No puedes pasar.");
  }
};

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
