/*
  Warnings:

  - You are about to drop the `funcionario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `origem` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` ADD COLUMN `origem` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `funcionario`;
