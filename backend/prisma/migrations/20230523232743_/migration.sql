/*
  Warnings:

  - You are about to drop the column `hipertencao` on the `fichaDeAntecedentes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fichaDeAntecedentes" DROP COLUMN "hipertencao",
ADD COLUMN     "hipertensao" "SNNI" DEFAULT 'NAO_INFORMADO';
