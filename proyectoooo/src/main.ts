import { updateInscripcion, deleteInscripcion } from './operations';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log('1. Modificar inscripción');
  console.log('2. Eliminar inscripción');
  console.log('3. Salir');

  rl.question('Seleccione una opción: ', async (option) => {
    switch (option) {
      case '1':
        rl.question('ID de la inscripción a modificar: ', async (id) => {
          rl.question('Nuevo valor cancelado: ', async (valor) => {
            await updateInscripcion(parseInt(id), { Valor_cancelado: valor });
            console.log('Inscripción actualizada');
            main();
          });
        });
        break;
      case '2':
        rl.question('ID de la inscripción a eliminar: ', async (id) => {
          await deleteInscripcion(parseInt(id));
          console.log('Inscripción eliminada');
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