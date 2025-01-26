import { Transaction } from '@prisma/client';
import { Request, Response } from 'express';
import { getAllTransactions, addTransaction, getTransactionsByDateRange } from '../services/transactionService';

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

export const getTransactionsBetweenDates = async (req: Request, res: Response) => {
  const startDate = new Date(req.params.startDate);
  const endDate = new Date(req.params.endDate);

  const transactions = await getTransactionsByDateRange(startDate, endDate);
  res.json(transactions);
};

export const valueOfTransactions = (transactions: Transaction[]) => {
  return transactions.reduce((acc, transaction) => acc + transaction.amount.toNumber(), 0);
}
