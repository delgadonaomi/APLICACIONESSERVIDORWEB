import { updateAlumno, deleteAlumno } from './operations';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log('1. Modificar alumno');
  console.log('2. Eliminar alumno');
  console.log('3. Salir');

  rl.question('Seleccione una opción: ', async (option) => {
    switch (option) {
      case '1':
        rl.question('ID del alumno a modificar: ', async (id) => {
          rl.question('Nuevo valor de la nota: ', async (valor) => {
            await updateAlumno(parseInt(id), { Valor_Nota: valor });
            console.log('Alumno actualizado');
            main();
          });
        });
        break;
      case '2':
        rl.question('ID del alumno a eliminar: ', async (id) => {
          await deleteAlumno(parseInt(id));
          console.log('Alumno eliminado');
          main();
        });
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Opción no válida');
        main();
    }
  });
}

main();
