import express from 'express';
import { renderForm, handleGenerate } from '../controllers/passwordController';
const router = express.Router();

router.get('/', renderForm);
router.post('/generate', handleGenerate);

export default router;
