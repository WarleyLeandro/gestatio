-- CreateEnum
CREATE TYPE "ATStatus" AS ENUM ('MENOS_5_ANOS', 'MAIS_5_ANOS', 'NAO_INFORMADO');

-- CreateTable
CREATE TABLE "fichaDeVacinas" (
    "id" TEXT NOT NULL,
    "ATStatus" "ATStatus" DEFAULT 'NAO_INFORMADO',
    "AT1dose" TEXT NOT NULL,
    "AT2dose" TEXT NOT NULL,
    "vacinadTpa" TEXT NOT NULL,
    "HBStatus" TEXT NOT NULL,
    "HB1dose" TEXT NOT NULL,
    "HB2dose" TEXT NOT NULL,
    "HB3dose" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "fichaDeVacinas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichaDeVacinas" ADD CONSTRAINT "fichaDeVacinas_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichaDeVacinas" ADD CONSTRAINT "fichaDeVacinas_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
