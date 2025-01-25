import express from 'express';
import transactionRoutes from './transactionRoutes';
import transactionCategoryRoutes from './transactionCategoryRoutes';
import accountRoutes from './accountRoutes';
import accountTypeRoutes from './accountTypeRoutes';

const router = express.Router();

router.use('/transactions', transactionRoutes);
router.use('/transactions/categories', transactionCategoryRoutes);
router.use('/accounts', accountRoutes);
router.use('/accounts/types', accountTypeRoutes);

export default router;