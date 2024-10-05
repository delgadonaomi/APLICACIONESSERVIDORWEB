import 'reflect-metadata';
import { AppDataSource } from './config/database'; // Asegúrate de que la ruta es correcta
import app from './app';
import { Usuario } from './entities/Usuario'; // Importa tu entidad si la necesitas aquí

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conexión a la base de datos establecida.');

        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

startServer();
