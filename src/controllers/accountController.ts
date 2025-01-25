import { Request, Response } from 'express';
import { getAllAccounts, addAccount } from '../services/accountService';

export const getAccounts = async (req: Request, res: Response) => {
  const accounts = await getAllAccounts();
  res.json(accounts);
};

export const createAccount = async (req: Request, res: Response) => {
  const account = await addAccount(req.body);
  res.status(201).json(account);
};
