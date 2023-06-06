
class animal {
    constructor(especie , edad , color) {
        this.especie = especie ; // ? this. es el objeto que se va a crear , puede tener cuualquier otro nombre como this.esp y seria lo mismo
        this.edad = edad ;
        this.color = color ;
        this.info = `Soy un ${this.especie} , tengo ${this.edad} años y soy de color ${this.color}` ;
    }

    // ! no se puede utilizar funciones flecha en un metodo
    // ? una funcion dentro de una clase se le llama metodo y pasaria a ser un objeto mas.
    verInfo() {  
        document.write(this.info + "<br>")
    }
    
}


let perro = new animal("perro" , 5 , "marron") ;
let gato = new animal ("gato" , 2 , "gris") ;
let pajaro = new animal ("loro" , 1 , "verde")

perro.verInfo() ;
gato.verInfo() ;
pajaro.verInfo() ;
