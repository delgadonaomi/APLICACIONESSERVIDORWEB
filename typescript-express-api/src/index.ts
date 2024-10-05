import express from 'express';
import { createConnection } from 'typeorm';
import asignaturaRoutes from './routes/asignaturaRoutes'; 
import alumnoRoutes from './routes/alumnoRoutes'; 
import notaRoutes from './routes/notaRoutes'; 

const app = express();

app.use(express.json()); 

createConnection()
  .then(() => {
    console.log('Conectado a la base de datos');
    
    // Rutas
    app.use('/api/asignaturas', asignaturaRoutes); 
    app.use('/api/alumnos', alumnoRoutes);
    app.use('/api/notas', notaRoutes); 

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });
