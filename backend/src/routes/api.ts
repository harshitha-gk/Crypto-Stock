import express from 'express';
import { getData } from '../controllers/dataController';

const router = express.Router();

router.get('/data/:symbol', getData);

export default router;
