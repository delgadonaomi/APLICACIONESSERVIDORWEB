import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Alumno } from '../entity/alumno';

// Obtener todos los alumnos
export const getAllAlumnos = async (req: Request, res: Response) => {
  const alumnos = await getRepository(Alumno).find();
  res.json(alumnos);
};

// Obtener un alumno por ID
export const getAlumnoById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const alumno = await getRepository(Alumno).findOne({ where: { ID: id } });
  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).send('Alumno no encontrado');
  }
};

// Crear un nuevo alumno
export const createAlumno = async (req: Request, res: Response) => {
  const nuevoAlumno = getRepository(Alumno).create(req.body);
  const result = await getRepository(Alumno).save(nuevoAlumno);
  res.status(201).json(result);
};

// Actualizar un alumno existente
export const updateAlumno = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const alumno = await getRepository(Alumno).findOne({ where: { ID: id } });
  if (alumno) {
    getRepository(Alumno).merge(alumno, req.body);
    const result = await getRepository(Alumno).save(alumno);
    res.json(result);
  } else {
    res.status(404).send('Alumno no encontrado');
  }
};

// Eliminar un alumno
export const deleteAlumno = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await getRepository(Alumno).delete(id);
  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).send('Alumno no encontrado');
  }
};
