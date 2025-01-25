import prisma from '../db';

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany();
};

export const addTransaction = async (data: any) => {
  return await prisma.transaction.create({ data });
};
