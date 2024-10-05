import { Alumno, Asignatura, Nota, Alumnos, Asignaturas, Notas } from "./Tarea";

export async function buscarAlumnoAsyncAwait(id: number): Promise<Alumno | undefined> {
    try {
        const alumno = Alumnos.find(alumno => alumno.ID === id);
        if (!alumno) throw new Error("Alumno no encontrado");
        return alumno;
    } catch (error) {
        console.error(error);
    }
}

export async function buscarAsignaturaAsyncAwait(id: number): Promise<Asignatura | undefined> {
    try {
        const asignatura = Asignaturas.find(asignatura => asignatura.ID === id);
        if (!asignatura) throw new Error("Asignatura no encontrada");
        return asignatura;
    } catch (error) {
        console.error(error);
    }
}

export async function buscarNotaAsyncAwait(id: number): Promise<Nota | undefined> {
    try {
        const nota = Notas.find(nota => nota.ID === id);
        if (!nota) throw new Error("Nota no encontrada");
        return nota;
    } catch (error) {
        console.error(error);
    }
}

export {
    buscarAlumnoAsyncAwait,
    buscarAsignaturaAsyncAwait,
    buscarNotaAsyncAwait,
};
