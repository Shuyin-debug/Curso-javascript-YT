let dineroCofla = parseFloat(prompt("¿Cuánto dinero tiene Cofla?"));
let dineroRoberto = parseFloat(prompt("¿Cuánto dinero tiene Roberto?"));
let dineroPedro = parseFloat(prompt("¿Cuánto dinero tiene Pedro?"));

// Cofla
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, cómprate el helado de agua.");
    alert("y te sobran " + (dineroCofla - 0.6).toFixed(2));  // ! mas abajo la explicacion del toFixed
} else if (dineroCofla >= 1 && dineroCofla < 1.6 ) {
    alert("Cofla, cómprate el helado de crema.");
    alert("y te sobran " + (dineroCofla - 1).toFixed(2));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7 ) {
    alert("Cofla, cómprate el helado de heladix.");
    alert("y te sobran " + (dineroCofla - 1.6).toFixed(2));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8 ) {
    alert("Cofla, cómprate el helado de heladovich.");
    alert("y te sobran " + (dineroCofla - 1.7).toFixed(2));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9 ) {
    alert("Cofla, cómprate el helado de helardo.");
    alert("y te sobran " + (dineroCofla - 1.8).toFixed(2));
} else if (dineroCofla >= 2.9) {
    alert("Cofla, lo siento, no te alcanza para ninguno de los helados.");
    alert("y te sobran " + (dineroCofla - 2.9).toFixed(2));
}

// Roberto
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, cómprate el helado de agua.");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6 ) {
    alert("Roberto, cómprate el helado de crema.");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7 ) {
    alert("Roberto, cómprate el helado de heladix.");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8 ) {
    alert("Roberto, cómprate el helado de heladovich.");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9 ) {
    alert("Roberto, cómprate el helado de helardo.");
} else if (dineroRoberto >= 2.9) {
    alert("Roberto, lo siento, no te alcanza para ninguno de los helados.");
}

// Pedro
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, cómprate el helado de agua.");
} else if (dineroPedro >= 1 && dineroPedro < 1.6 ) {
    alert("Pedro, cómprate el helado de crema.");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7 ) {
    alert("Pedro, cómprate el helado de heladix.");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8 ) {
    alert("Pedro, cómprate el helado de heladovich.");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9 ) {
    alert("Pedro, cómprate el helado de helardo.");
} else if (dineroPedro >= 2.9) {
    alert("Pedro, lo siento, no te alcanza para ninguno de los helados.");
}


// ? El método toFixed(2) se utiliza para redondear un número a dos decimales y devuelve una cadena de texto que representa ese número.

// Ejemplo de uso:
const numero = 3.14159;
const numeroRedondeado = numero.toFixed(2);
// El resultado de numeroRedondeado sería "3.14"
