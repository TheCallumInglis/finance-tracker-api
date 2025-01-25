import express from 'express';
import { getAccountTypes, createAccountType } from '../controllers/accountTypeController';

const router = express.Router();

router.get('/', getAccountTypes);
router.post('/', createAccountType);

export default router;