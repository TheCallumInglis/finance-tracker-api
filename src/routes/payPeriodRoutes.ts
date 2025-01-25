import express from 'express';
import { getPayPeriods, createPayPeriod } from '../controllers/payPeriodController';

const router = express.Router();

router.get('/', getPayPeriods);
router.post('/', createPayPeriod);

export default router;