import express from 'express';
import accountRoutes from './accountRoutes';
import accountTypeRoutes from './accountTypeRoutes';
import transactionCategoryRoutes from './transactionCategoryRoutes';
import transactionRoutes from './transactionRoutes';

const router = express.Router();

router.use('/transactions', transactionRoutes);
router.use('/transactions/categories', transactionCategoryRoutes);
router.use('/accounts', accountRoutes);
router.use('/accounts/types', accountTypeRoutes);

export default router;
