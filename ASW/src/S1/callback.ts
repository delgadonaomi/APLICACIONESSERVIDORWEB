import { Alumno, Asignatura, Nota, Alumnos, Asignaturas, Notas } from "./Tarea";

// Definir una función que reciba como parámetros: un arreglo de elementos de su 
// entidad transaccional, un ID y una función con el método de búsqueda; debe devolver
// el objeto encontrado, y luego mostrarlo por consola u otro medio usando el Callback.
function buscarAlumno(id: number, callback: (error: Error | null, alumno?: Alumno) => void) {
    const alumno = Alumnos.find(alumno => alumno.ID === id);
    if (!alumno) {
        callback(new Error(`No se ha encontrado el alumno con id ${id}`));
        return;
    }
    callback(null, alumno);
}

function buscarAsignatura(id: number, callback: (error: Error | null, asignatura?: Asignatura) => void) {
    const asignatura = Asignaturas.find(asignatura => asignatura.ID === id);
    if (!asignatura) {
        callback(new Error(`No se ha encontrado la asignatura con id ${id}`));
        return;
    }
    callback(null, asignatura);
}

function buscarNota(id: number, callback: (error: Error | null, nota?: Nota) => void) {
    const nota = Notas.find(nota => nota.ID === id);
    if (!nota) {
        callback(new Error(`No se ha encontrado la nota con id ${id}`));
        return;
    }
    callback(null, nota);
}

export {
    buscarAlumno,
    buscarAsignatura,
    buscarNota
};
