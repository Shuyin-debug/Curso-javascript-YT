
class APP {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciado = false;
        this.instalado = false;
    }

    abrir() {
        if (this.iniciado == false && this.instalado == true) {
            this.iniciado = true;
            alert("app abierto")
        }
    }

    cerrar() {
        if (this.iniciado == true) {
            this.iniciado = false;
            alert("app cerrada")
        }
    }

    instalar() {
        if (this.instalado == false) {
            this.instalado = true;
            alert("app instalada")
        }
    }

    desinstalar() {
        if (this.instalado == true) {
            this.instalado = false;
            alert("app desinstalado")
        }
    }

    appInfo(){
        return `
        Descargas: <b> ${this.descargas} </b> <br>
        Puntuacion: <b> ${this.puntuacion} </b> <br>
        Peso: <b> ${this.peso} </b> <br>
        `
    }

}


app1 = new APP ("10.000" , "4 estrellas" , "1.2gb");
app2 = new APP ("11.000" , "2 estrellas" , "1.1gb");
app3 = new APP ("1.000" , "1 estrellas" , "1.4gb");
app4 = new APP ("12.000" , "5 estrellas" , "2.2gb");
app5 = new APP ("2.000" , "3 estrellas" , "3.2gb");
app6 = new APP ("5.000" , "3 estrellas" , "4.2gb");
app7 = new APP ("18.000" , "2 estrellas" , "5gb");

document.write (`
${app1.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>`)