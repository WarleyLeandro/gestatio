/*
  Warnings:

  - You are about to drop the column `email` on the `dadosPessoais` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `dadosPessoais` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `pacientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dadosPessoais" DROP COLUMN "email",
DROP COLUMN "nome";

-- AlterTable
ALTER TABLE "medicos" ADD COLUMN     "nome" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_email_key" ON "pacientes"("email");
