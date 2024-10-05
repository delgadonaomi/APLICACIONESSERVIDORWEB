import { AppDataSource } from "./data-source";
import { Nota } from './entity/Nota';

export const createNota = async (data: {
    ID_Asignatura: number;
    ID_Alumno: number;
    Valor: number;
}): Promise<Nota> => {
    const notaRepository = AppDataSource.getRepository(Nota);
    
    const nota = new Nota();
    nota.ID_Asignatura = data.ID_Asignatura;
    nota.ID_Alumno = data.ID_Alumno;
    nota.Valor = data.Valor;

    return await notaRepository.save(nota);
};

export const getAllNotas = async (): Promise<Nota[]> => {
    const notaRepository = AppDataSource.getRepository(Nota);
    return await notaRepository.find();
};
