import { Request, Response } from 'express';
import { getAllTransactions, addTransaction } from '../services/transactionService';

export const getTransactions = async (req: Request, res: Response) => {
  const transactions = await getAllTransactions();
  res.json(transactions);
};

export const createTransaction = async (req: Request, res: Response) => {
  const transaction = await addTransaction(req.body);
  res.status(201).json(transaction);
};