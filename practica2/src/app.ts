// src/main.ts or src/controllers/alumnoController.ts
import { createalumno, getAllalumno } from "./FuncionesTypeORM";

// Ejemplo de uso de createalumno
const newalumno = await createalumno({
    ID_asingatura: 1,
    ID_nota: 2,
    Fecha: '2024-09-18',
    Hora: '10:00',
    Valor_cancelado: '100'
});
console.log("New alumno:", newalumno);

// Ejemplo de uso de getAllalumno
const allInscripciones = await getAllalumno();
console.log("All alumno:", allalumno);
