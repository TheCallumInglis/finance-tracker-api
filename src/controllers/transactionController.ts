import { Request, Response } from 'express';
import { getAllTransactions, addTransaction } from '../services/transactionService';
import { Transaction } from '@prisma/client';

export const getTransactions = async (req: Request, res: Response) => {
  const transactions = await getAllTransactions();
  res.json(transactions);
};

export const createTransaction = async (req: Request, res: Response) => {
  const newTransaction: Transaction = {
    ...req.body,
    date: new Date(req.body.date).toISOString(),
    amount: Number(req.body.amount),
    accountId: Number(req.body.accountId),
    transactionCategoryId: Number(req.body.transactionCategoryId),
  };

  const transaction = await addTransaction(newTransaction);
  res.status(201).json(transaction);
};
