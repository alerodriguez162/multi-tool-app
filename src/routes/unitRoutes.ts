import express from 'express';
import { renderConverter, convertUnits } from '../controllers/unitController';
const router = express.Router();

router.get('/', renderConverter);
router.post('/convert', convertUnits);

export default router;
