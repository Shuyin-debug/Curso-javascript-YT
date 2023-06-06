
class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando celular");
        } else {
            alert("Celular apagado");
        }
    }

    tomarFoto() {
        alert(`Foto tomada en una resolución de ${this.resolucionDeCamara}`);
    }

    grabarVideo() {
        alert(`Video capturado en una resolución de ${this.resolucionDeCamara}`);
    }

    mostrarPropiedades() {
        document.open();
        // ? Iteramos en el nombre de cada objeto
        for (const propiedad in this) {
            // ? verificamos que el objeto no es heredado
            if (this.hasOwnProperty(propiedad)) {  
                            //? buscamos el nombre del objeto       // ? al poner this[propidad] accedemos al valor de cada objeto
                document.write(`<strong>${propiedad}:</strong> ${this[propiedad]}<br>`);
            }
        }
        document.close();
    }
}




class celularGamaAlta extends Celular {
    constructor(color, peso, rdp, rdc, ram, rcde) {
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rcde;
    }

    grabarVideoLento() {
        alert("Estás grabando en cámara lenta");
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }

    mostrarPropiedadesEnDocument() {
        const properties = [];
        for (const propiedad in this) {
            if (this.hasOwnProperty(propiedad)) {
                properties.push(`<strong>${propiedad}:</strong> ${this[propiedad]}`);
            }
        }
        const propertiesHTML = properties.join("<br>");
        document.write(propertiesHTML);
    }
}










// Ejemplo de uso del objeto Celular
/* const miCelular = new Celular("Negro", "150g", "1920x1080", "12MP", "4GB");
miCelular.presionarBotonEncendido();
miCelular.reiniciar();
miCelular.tomarFoto();
miCelular.grabarVideo();
miCelular.mostrarPropiedades() ;
 */

const miCelularGamaAlta = new celularGamaAlta("Negro", "150g", "1920x1080", "12MP", "4GB", "8MP");
miCelularGamaAlta.mostrarPropiedadesEnDocument();

