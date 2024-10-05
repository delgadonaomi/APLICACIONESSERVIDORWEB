import { AppDataSource } from "./data-source";
import { Asignatura } from './entity/Asignatura';
import { Alumno } from './entity/Alumno';
import { createNota, getAllNotas } from './FuncionesTypeORM';

AppDataSource.initialize()
  .then(async () => {
    // Crear una nueva nota
    const newNota = await createNota({
      ID_Asignatura: 1,
      ID_Alumno: 3,
      Valor: 85 // Ejemplo de valor de nota
    });
    console.log("New Nota:", newNota);

    // Consultar todas las notas
    const allNotas = await getAllNotas();
    console.log("All Notas:", allNotas);
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });
