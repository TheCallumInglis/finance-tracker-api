import prisma from '../db';

export const getAllAccounts = async () => {
  return (await prisma.account.findMany()).sort((a, b) => a.name.localeCompare(b.name));
};

export const addAccount = async (body: any) => {
  const { name, isDefault, accountTypeId } = body;

  if (isDefault) {
    // Remove existing default account
    await prisma.account.updateMany({
      where: { isDefault: true },
      data: { isDefault: false },
    });
  }

  return await prisma.account.create({
    data: { name, isDefault: isDefault || false, accountTypeId },
  });
};
