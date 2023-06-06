
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


// ? la clase perro es una herencia de la clase animal
class perro extends animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza ;
    }

    set setRaza(newName) {  // ? el set lo toma como propiedad
        this.raza = newName ;
    }

    get getRaza(){  // ? el get se utiliza para tomar un valor
        return this.raza;
    }

}

// ! una variable no puede tener el mismo nombre que una clase , tambien las clases podrian tener mayuscula al inicio para no tener conflico con el nombre de la variable

// ! las instancias o objetos deben de comenzar con const

const perroo = new animal("perro" , 5 , "marron" , "doberman") ;
const gato = new animal ("gato" , 2 , "gris") ;
const pajaro = new animal ("loro" , 1 , "verde")



// * Los getters se utilizan para obtener el valor de una propiedad, mientras que los setters se utilizan para establecer el valor de una propiedad. 
perroo.setRaza = "Husky" ;
document.write(perroo.getRaza) ;


perroo.verInfo() ;
gato.verInfo() ;
pajaro.verInfo() ;
