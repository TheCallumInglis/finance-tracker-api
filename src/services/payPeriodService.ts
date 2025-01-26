import { PayPeriod } from '@prisma/client';
import prisma from '../db';

export const getAllPayPeriods = async () => {
  return await prisma.payPeriod.findMany();
};

export const addPayPeriod = async (data: any) => {
  return await prisma.payPeriod.create({ data });
};

export const currentPayPeriod = async (): Promise<PayPeriod | null> => {
  const today = new Date();

  return await prisma.payPeriod.findFirst({
    where: {
      startDate: {
        lte: today,
      },
      endDate: {
        gte: today,
      },
    },
  })
}
