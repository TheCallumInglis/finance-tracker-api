import express from 'express';
import { getPayPeriods, createPayPeriod, getCurrentPayPeriod } from '../controllers/payPeriodController';

const router = express.Router();

router.get('/', getPayPeriods);
router.post('/', createPayPeriod);
router.get('/current', getCurrentPayPeriod);

export default router;
