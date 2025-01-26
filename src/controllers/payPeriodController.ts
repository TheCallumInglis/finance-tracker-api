import { Request, Response } from 'express';
import { getAllPayPeriods, addPayPeriod, currentPayPeriod } from '../services/payPeriodService';
import { PayPeriod } from '@prisma/client';
import daysBetweenDates from '../utils/daysBetweenDates';
import { getTransactionsByDateRange } from '../services/transactionService';
import { Decimal } from '@prisma/client/runtime/library';
import { valueOfTransactions } from './transactionController';

export const getPayPeriods = async (req: Request, res: Response) => {
  const payPeriods = await getAllPayPeriods();
  res.json(payPeriods);
};

export const budgetPerDay = (days: number, budget: number) => {
  let remaining = budget;

  if (days > 0) {
    remaining = budget / days;
  }

  return Math.floor(remaining * 100) / 100;
}

export const createPayPeriod = async (req: Request, res: Response) => {
  const newPayPeriod: PayPeriod = {
    ...req.body,
    startDate: new Date(req.body.startDate).toISOString(),
    endDate: new Date(req.body.endDate).toISOString(),
  }

  // TODO Check if pay period already exists]

  const payPeriod = await addPayPeriod(newPayPeriod);
  res.status(201).json(payPeriod);
};

export const getCurrentPayPeriod = async (req: Request, res: Response) => {
  const payPeriod = await currentPayPeriod();

  if (payPeriod) {
    const daysTotal = daysBetweenDates(payPeriod.startDate, payPeriod.endDate);
    const daysElapsed = (new Date() >= payPeriod.startDate && new Date() <= payPeriod.endDate 
      ? daysBetweenDates(payPeriod.startDate, new Date()) 
      : 0 // Before or after pay period
    );
    const daysRemaining = (new Date() > payPeriod.endDate 
      ? 0 // Beyond pay period
      : daysBetweenDates(new Date(), payPeriod.endDate)
    );

    const transactions = await getTransactionsByDateRange(payPeriod.startDate, payPeriod.endDate);

    const spendTotal = valueOfTransactions(transactions);
    const remainingBudget = Decimal.sub(payPeriod.budget, spendTotal).toNumber()

    const response = {
      id: payPeriod.id,
      startDate: payPeriod.startDate,
      endDate: payPeriod.endDate,

      daysTotal,
      daysElapsed,
      daysRemaining,

      budget: payPeriod.budget.toNumber(),
      budgetPerDay: Decimal.div(payPeriod.budget, daysTotal).toNumber(),

      spendTotal,
      spendAvgPerDay: Decimal.div(spendTotal, daysElapsed).toNumber(),

      remainingBudget,
      remainingBudgetPerDay: budgetPerDay(daysRemaining, remainingBudget),
    }

    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'No current pay set' });
  }
};
