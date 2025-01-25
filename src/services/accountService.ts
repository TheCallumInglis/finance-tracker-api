import prisma from '../db';

export const getAllAccounts = async () => {
  return await prisma.account.findMany();
};

export const addAccount = async (data: any) => {
  return await prisma.account.create({ data });
};