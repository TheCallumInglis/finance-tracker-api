import prisma from '../db';

export const getAllAccountTypes = async () => {
  return await prisma.accountType.findMany();
};

export const addAccountType = async (data: any) => {
  return await prisma.accountType.create({ data });
};