import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Asignatura } from '../entity/asignatura';

// Obtener todas las asignaturas
export const getAllAsignaturas = async (req: Request, res: Response) => {
  const asignaturas = await getRepository(Asignatura).find();
  res.json(asignaturas);
};

// Obtener una asignatura por ID
export const getAsignaturaById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // Convertir a número
  const asignatura = await getRepository(Asignatura).findOne({ where: { ID: id } }); // Usar el ID convertido
  if (asignatura) {
    res.json(asignatura);
  } else {
    res.status(404).send('Asignatura no encontrada');
  }
};

// Crear una nueva asignatura
export const createAsignatura = async (req: Request, res: Response) => {
  try {
    console.log('Cuerpo de la solicitud:', req.body); // Verifica el cuerpo de la solicitud

    const nuevaAsignatura = getRepository(Asignatura).create(req.body);
    console.log('Nueva asignatura creada:', nuevaAsignatura); // Verifica el objeto creado

    const result = await getRepository(Asignatura).save(nuevaAsignatura);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error al crear la asignatura:', error);
    res.status(500).send('Error al crear la asignatura');
  }
};

// Actualizar una asignatura existente
export const updateAsignatura = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // Convertir a número
  const asignatura = await getRepository(Asignatura).findOne({ where: { ID: id } }); // Usar el ID convertido
  if (asignatura) {
    getRepository(Asignatura).merge(asignatura, req.body);
    const result = await getRepository(Asignatura).save(asignatura);
    res.json(result);
  } else {
    res.status(404).send('Asignatura no encontrada');
  }
};

// Eliminar una asignatura
export const deleteAsignatura = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // Convertir a número
  const result = await getRepository(Asignatura).delete(id); // Usar el ID convertido
  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).send('Asignatura no encontrada');
  }
};
