import { Request, Response } from 'express';
import { getAllPayPeriods, addPayPeriod } from '../services/payPeriodService';

export const getPayPeriods = async (req: Request, res: Response) => {
  const accounts = await getAllPayPeriods();
  res.json(accounts);
};

export const createPayPeriod = async (req: Request, res: Response) => {
  const account = await addPayPeriod(req.body);
  res.status(201).json(account);
};
