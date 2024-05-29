/*
  Warnings:

  - Changed the type of `dataConsulta` on the `fichasDeConsultas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "fichasDeConsultas" DROP COLUMN "dataConsulta",
ADD COLUMN     "dataConsulta" TIMESTAMP(3) NOT NULL;
