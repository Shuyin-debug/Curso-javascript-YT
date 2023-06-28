
const materias = {  // ? el primer nombre sera el del profesor
    fisica: ["Perez" , "pedro", "pepito", "Cofla", "maria"],
    programacion: ["Rodriguez" , "pedro", "juan", "pepito"],
    logica: ["Hernandez" , "pedro", "juan", "pepito", "Cofla", "maria"],
    quimica: ["Gonzalez" , "pedro", "juan", "pepito", "Cofla", "maria"]
};


const inscribir = (alumno, materia) => {
    const estudiantes = materias[materia].slice(1); // obtenemos el arreglo de estudiantes para la materia
    const cupo = 20; // establecemos el cupo máximo de estudiantes

    if (estudiantes.length >= cupo) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas.`);
    } else {
        materias[materia].push(alumno); // agregamos al alumno al arreglo de estudiantes para la materia
        document.write(`El alumno <b>${alumno}</b> ha sido inscrito satisfactoriamente en la materia <b>${materia}</b>.`);
    }
};

const nombreAlumno = prompt("Ingrese el nombre del alumno:");
const materia = prompt("Ingrese la materia en la que desea inscribirse:");

inscribir(nombreAlumno, materia);

let contador = 0;

for (const materia in materias) {
  if (materias[materia].includes(nombreAlumno)) {
    contador++;
  }
}

document.write(`El alumno <b>${nombreAlumno}</b> está inscrito en <b>${contador}</b> materias.`);

// ? en un ejemplo real se verifica en una base de datos si hay un lugar disponible y el nombre del alumno se añade a la materia y entonces los cupos se pueden medir de esa forma y ver si hay un lugar mas.


