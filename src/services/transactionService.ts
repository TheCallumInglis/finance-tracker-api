import { Transaction } from '@prisma/client';
import prisma from '../db';

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany();
};

export const addTransaction = async (data: Transaction) => {
  return await prisma.transaction.create({ data });
};

export const getTransactionsByDateRange = async (startDate: Date, endDate: Date) => {
  return await prisma.transaction.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    orderBy: {
      date: 'desc',
    },
    // include: {
    //   transactionCategory: true,
    // }
  });
};

export const deleteTransactionById = async (id: number) => {
  return await prisma.transaction.delete({
    where: { 
      id: id 
    },
  });
}