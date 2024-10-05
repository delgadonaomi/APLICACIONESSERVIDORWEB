//import { IAlumno, IAsignatura, Nota, Alumnos, Asignaturas, Notas } from "./T1";
//import { buscarAlumno, buscarAsignatura, buscarNota } from "./T1";
//import { buscarNotaPromise, buscarAlumnoPromise, buscarAsignaturaPromise } from "./T1";
//import { buscarAlumnoAsyncAwait, buscarNotaAsyncAwait, buscarAsignaturaAsyncAwait } from "./T1";
//import { ICatImagen, fetchDataWithPromises, fetchDataWithAsyncAwait } from "./T1";

// Recorrer y mostrar los elementos de los arreglos de objetos aplicando instrucciones
//Alumnos.forEach(alumno => {
//  console.log(`ID: ${alumno.ID}, Nombre: ${alumno.Nombre}, Identificación: ${alumno.Identificación}`);
//});

//for (let asignatura of Asignaturas) {
//  console.log(`ID: ${asignatura.ID}, Descripción: ${asignatura.Descripción}, Créditos: ${asignatura.Créditos}`);
//}

//for (let i in Notas) {
//  if (Notas.hasOwnProperty(i)) {
//    let nota = Notas[i];
//      console.log(`ID: ${nota.ID}, ID Alumno: ${nota.ID_Alumno}, ID Asignatura: ${nota.ID_Asignatura}, Valor: ${nota.Valor}`);
//    }
//}

// Ejemplo de Buscador con callbacks
//buscarNota(1, (error, nota) => {
//   if (error) {
//        console.error(error);
//        return;
//    }
//    console.log('Nota:');
//    console.log(nota);
//    buscarAsignatura(nota!.ID_Asignatura, (error, asignatura) => {
//       if (error) {
//            console.error(error);
//            return;
//       }
//       console.log('Asignatura:');
//        console.log(asignatura);
//        buscarAlumno(nota!.ID_Alumno, (error, alumno) => {
//            if (error) {
//                console.error(error);
//                return;
//            }
//            console.log('Alumno:');
//            console.log(alumno);
//        });
//    });
//});

// Ejemplo de Buscador con promesas
//buscarNotaPromise(2)
//    .then(nota => {
//        console.log('Nota:');
//        console.log(nota);
//    })
//    .catch(error => console.error(error));

//buscarAsignaturaPromise(3)
//    .then(asignatura => {
//        console.log('Asignatura:');
//        console.log(asignatura);
//    })
//    .catch(error => console.error(error));

//buscarAlumnoPromise(4)
//    .then(alumno => {
//        console.log('Alumno:');
//        console.log(alumno);
//    })
//    .catch(error => console.error(error));

// Ejemplo de Buscador con async/await
//async function main() {
//    try {
//        const nota = await buscarNotaAsyncAwait(5);
//        console.log(nota);
//       const alumno = await buscarAlumnoAsyncAwait(nota.ID_Alumno);
//        console.log(alumno);
//        const asignatura = await buscarAsignaturaAsyncAwait(nota.ID_Asignatura);
//        console.log(asignatura);
//    } catch (error) {
//        console.error(error);
//    }
//}

//main();

// FetchData con Promesas
//fetchDataWithPromises<ICatImagen>('https://api.thecatapi.com/v1/images/search')
//    .then(response => {
//        if (response.length > 0) {
//            console.log('Imagen del gato:', response[0].url);
//        } else {
//            console.log('No se encontraron imágenes.');
//        }
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });

// FetchData con Async/Await
//(async () => {
//    try {
//        const response = await fetchDataWithAsyncAwait<ICatImagen>('https://api.thecatapi.com/v1/images/search');
//        if (response.length > 0) {
//            console.log('Imagen del gato:', response[0].url);
//        } else {
//            console.log('No se encontraron imágenes.');
//        }
//    } catch (error) {
//        console.error('Error:', error);
    }
//})();
