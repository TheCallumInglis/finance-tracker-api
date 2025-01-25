import { PrismaClient } from '@prisma/client';
import logger from '../src/utils/logger';

const prisma = new PrismaClient();

const transactionCategories = [
  'Pub',
  'Food Shop',
  'Purchases',
  'Lunch Out',
  'Dinner Out',
  'Breakfast Out',
  'Cash Withdrawal',
  'Clothes',
  'Travel',
  'Cinema',
  'Gifts',
  'Snacks',
  'Electricity',
  'Entertainment',
  'Broadband',
  'Mobile Plan',
  'Coffee',
  'Subscriptions',
  'Misc',
  'Haircut',
  'Transfer',
  'Utilities',
];

async function seedTransactionCategories() {
    logger.info('Seeding transaction categories...');

  for (const category of transactionCategories) {
    await prisma.transactionCategory.upsert({
      where: { name: category },
      update: {},
      create: { name: category },
    });
  }

  logger.info('Transaction categories seeded successfully!');
}

seedTransactionCategories()
  .catch((e) => {
    logger.error('Error seeding transaction categories:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });