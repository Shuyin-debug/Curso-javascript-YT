
const obtenerInfo = (materia) => {
    materias = {  // ? el primer nombre sera el del profesor
        fisica: ["Perez" , "pedro", "pepito", "Cofla", "maria"],
        programacion: ["Rodriguez" , "pedro", "juan", "pepito"],
        logica: ["Hernandez" , "pedro", "juan", "pepito", "Cofla", "maria"],
        quimica: ["Gonzalez" , "pedro", "juan", "pepito", "Cofla", "maria"]
    };
    
    // ? verifica si la propiedad de objeto correspondiente al nombre de la materia existe en un objeto llamado materias.
    if (materias[materia] !== undefined) {
        // Devuelve un objeto con el arreglo de estudiantes y el nombre del profesor
        return {
            estudiantes: materias[materia].slice(1), // Ignora el primer elemento (el nombre del profesor)
            profesor: materias[materia][0] // Obtiene el primer elemento (el nombre del profesor)
        };
    } else {
        return false;
    }
};

const mostrarInfo = (materia) => {
    let informacion = obtenerInfo(materia);

    if (informacion !== false) {
        document.write(`Los alumnos presentes en <b>${materia}</b> son: <b style='color:red'> ${informacion.estudiantes} </b><br> el profesor es <b style=color:blue>${informacion.profesor}</b><br><br> `);
    }
};

const mostrarInfoAlumno = (alumno) => {
    let clases = [];

    for (let materia in materias) {
        if (materias[materia].includes(alumno)) {
            clases.push(materia);
        }
    }

    if (clases.length > 0) {
        document.write(`El alumno <b>${alumno}</b> está inscrito en las siguientes clases: <b>${clases.join(", ")}</b>.`);
    } else {
        document.write(`El alumno <b>${alumno}</b> no está inscrito en ninguna clase.`);
    }
};

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");
mostrarInfoAlumno("Cofla")
