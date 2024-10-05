interface Alumno {
    id: number;
    nombre: string;
    identificacion: string;
}

interface Asignatura {
    id: number;
    descripcion: string;
    nivel: number;
    creditos: number;
}

interface Nota {
    id: number;
    alumnoId: number;
    asignaturaId: number;
    parcial: number;
    nota: number;
    observacion: string;
    estado: string;
}

const alumnos: Alumno[] = [
    { id: 1, nombre: "Carlos López", identificacion: "ABC123" },
    { id: 2, nombre: "Ana Morales", identificacion: "DEF456" },
    { id: 3, nombre: "Roger Muñoz", identificacion: "GHI789" },
    { id: 4, nombre: "Laura Gómez", identificacion: "JKL012" },
    { id: 5, nombre: "Sofía Torres", identificacion: "MNO345" }
];

const asignaturas: Asignatura[] = [
    { id: 1, descripcion: "Matemáticas", nivel: 1, creditos: 3 },
    { id: 2, descripcion: "Física", nivel: 1, creditos: 4 },
    { id: 3, descripcion: "Química", nivel: 2, creditos: 3 },
    { id: 4, descripcion: "Programación", nivel: 1, creditos: 5 },
    { id: 5, descripcion: "Historia", nivel: 2, creditos: 2 }
];

const notas: Nota[] = [
    { id: 1, alumnoId: 1, asignaturaId: 1, parcial: 1, nota: 85, observacion: "Buena", estado: "Aprobado" },
    { id: 2, alumnoId: 2, asignaturaId: 2, parcial: 1, nota: 90, observacion: "Excelente", estado: "Aprobado" },
    { id: 3, alumnoId: 3, asignaturaId: 3, parcial: 1, nota: 78, observacion: "Regular", estado: "Aprobado" },
    { id: 4, alumnoId: 4, asignaturaId: 4, parcial: 1, nota: 92, observacion: "Excelente", estado: "Aprobado" },
    { id: 5, alumnoId: 5, asignaturaId: 5, parcial: 1, nota: 88, observacion: "Muy Buena", estado: "Aprobado" }
];

console.log("Alumnos:");
alumnos.forEach(alumno => {
    console.log(`ID: ${alumno.id}, Nombre: ${alumno.nombre}, Identificación: ${alumno.identificacion}`);
});

console.log("Asignaturas:");
for (let index in asignaturas) {
    const asignatura = asignaturas[index];
    console.log(`ID: ${asignatura.id}, Descripción: ${asignatura.descripcion}, Nivel: ${asignatura.nivel}, Créditos: ${asignatura.creditos}`);
}

console.log("Notas:");
for (let nota of notas) {
    console.log(`ID: ${nota.id}, AlumnoID: ${nota.alumnoId}, AsignaturaID: ${nota.asignaturaId}, Nota: ${nota.nota}, Estado: ${nota.estado}`);
}