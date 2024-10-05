import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Nota } from '../entity/nota';

// Obtener todas las notas
export const getAllNotas = async (req: Request, res: Response) => {
  const notas = await getRepository(Nota).find();
  res.json(notas);
};

// Obtener una nota por ID
export const getNotaById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const nota = await getRepository(Nota).findOne({ where: { ID: id } });
  if (nota) {
    res.json(nota);
  } else {
    res.status(404).send('Nota no encontrada');
  }
};

// Crear una nueva nota
export const createNota = async (req: Request, res: Response) => {
  const nuevaNota = getRepository(Nota).create(req.body);
  const result = await getRepository(Nota).save(nuevaNota);
  res.status(201).json(result);
};

// Actualizar una nota existente
export const updateNota = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const nota = await getRepository(Nota).findOne({ where: { ID: id } });
  if (nota) {
    getRepository(Nota).merge(nota, req.body);
    const result = await getRepository(Nota).save(nota);
    res.json(result);
  } else {
    res.status(404).send('Nota no encontrada');
  }
};

// Eliminar una nota
export const deleteNota = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await getRepository(Nota).delete(id);
  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).send('Nota no encontrada');
  }
};
