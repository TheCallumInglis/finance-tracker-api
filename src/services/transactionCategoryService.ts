import prisma from '../db';

export const getAllTransactionCategories = async () => {
  return (await prisma.transactionCategory.findMany()).sort((a, b) => a.name.localeCompare(b.name));
};

export const addTransactionCategory = async (data: any) => {
  return await prisma.transactionCategory.create({ data });
};
