/*
  Warnings:

  - You are about to drop the column `payPeriodId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_payPeriodId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "payPeriodId";
