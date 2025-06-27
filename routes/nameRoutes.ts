import express from 'express';
import { renderNameForm, generateName } from '../controllers/nameController';
const router = express.Router();

router.get('/', renderNameForm);
router.post('/generate', generateName);

export default router;
