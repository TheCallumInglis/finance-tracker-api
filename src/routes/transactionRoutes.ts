import express from 'express';
import { getTransactions, createTransaction, getTransactionsBetweenDates, deleteTransaction } from '../controllers/transactionController';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.get('/:startDate/:endDate', getTransactionsBetweenDates);
router.delete('/:id', deleteTransaction);

export default router;
