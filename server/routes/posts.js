import express from 'express';

import { getPosts, createPost, updatePost, deletePost, rateProfessor } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/rateProfessor', auth, rateProfessor);
router.delete('/:id', auth, deletePost);


export default router;