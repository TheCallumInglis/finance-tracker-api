import express from 'express';
import accountRoutes from './accountRoutes';
import accountTypeRoutes from './accountTypeRoutes';
import transactionCategoryRoutes from './transactionCategoryRoutes';
import transactionRoutes from './transactionRoutes';
import payPeriodRoutes from './payPeriodRoutes';

const router = express.Router();

router.use('/transactions', transactionRoutes);
router.use('/transactions/categories', transactionCategoryRoutes);
router.use('/accounts', accountRoutes);
router.use('/accounts/types', accountTypeRoutes);
router.use('/payPeriod', payPeriodRoutes)

export default router;
