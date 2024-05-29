-- CreateEnum
CREATE TYPE "PositivoNegativo" AS ENUM ('POSITIVO', 'NEGATIVO');

-- CreateTable
CREATE TABLE "fichaDeExame" (
    "id" TEXT NOT NULL,
    "ABO_RH" TEXT NOT NULL,
    "glicemiaJejum" TEXT NOT NULL,
    "testeOralToleranciaGlicose" TEXT NOT NULL,
    "sifilis" "PositivoNegativo" NOT NULL,
    "vdrl" "PositivoNegativo" NOT NULL,
    "hiv_antiHiv" "PositivoNegativo" NOT NULL,
    "hepatiteB" "PositivoNegativo" NOT NULL,
    "toxoplasmose" "PositivoNegativo" NOT NULL,
    "hemoglobina_hematocrito" TEXT NOT NULL,
    "urinaEAS" TEXT NOT NULL,
    "urinaCultura" TEXT NOT NULL,
    "coombsIndireto" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "fichaDeExame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichaDeExame" ADD CONSTRAINT "fichaDeExame_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichaDeExame" ADD CONSTRAINT "fichaDeExame_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
