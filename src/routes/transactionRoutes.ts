import express from 'express';
import { getTransactions, createTransaction, getTransactionsBetweenDates } from '../controllers/transactionController';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.get('/:startDate/:endDate', getTransactionsBetweenDates);

export default router;
