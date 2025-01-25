import express from 'express';
import { getTransactionCategories, createTransactionCategory } from '../controllers/transactionCategoryController';

const router = express.Router();

router.get('/', getTransactionCategories);
router.post('/', createTransactionCategory);

export default router;