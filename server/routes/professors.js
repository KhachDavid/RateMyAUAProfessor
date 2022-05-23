import express from 'express';

import {getProfessors, createProfessor, updateProfessor, deleteProfessor, rateProfessor} from '../controllers/professors.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProfessors);
router.post('/', auth, createProfessor);
router.patch('/:id', auth, updateProfessor);
router.patch('/:id/rateProfessor', auth, rateProfessor);
router.delete('/:id', auth, deleteProfessor);


export default router;