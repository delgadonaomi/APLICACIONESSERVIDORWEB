import { Router } from 'express';
import * as asignaturaController from '../controller/asignaturaController';

const router = Router();

router.get('/', asignaturaController.getAllAsignaturas);
router.get('/:id', asignaturaController.getAsignaturaById);
router.post('/', asignaturaController.createAsignatura);
router.patch('/:id', asignaturaController.updateAsignatura);
router.delete('/:id', asignaturaController.deleteAsignatura);

export default router;
