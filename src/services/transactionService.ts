import { Transaction } from '@prisma/client';
import prisma from '../db';

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany();
};

export const addTransaction = async (data: Transaction) => {
  return await prisma.transaction.create({ data });
};
