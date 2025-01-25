import prisma from '../db';

export const getAllPayPeriods = async () => {
  return await prisma.payPeriod.findMany();
};

export const addPayPeriod = async (data: any) => {
  return await prisma.payPeriod.create({ data });
};