-- CreateEnum
CREATE TYPE "NivelInstrucao" AS ENUM ('FUNDAMENTAL', 'MEDIO', 'SUPERIOR', 'NENHUM');

-- CreateEnum
CREATE TYPE "EstadoCivil" AS ENUM ('CASADA', 'SOLTEIRA', 'ESTAVEL', 'OUTRO');

-- CreateTable
CREATE TABLE "fichasDoPreNatal" (
    "id" TEXT NOT NULL,
    "nivelInstrucao" "NivelInstrucao" DEFAULT 'NENHUM',
    "estadoCivil" "EstadoCivil" DEFAULT 'SOLTEIRA',
    "pesoAnterior" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "IMC" TEXT NOT NULL,
    "DUM" TEXT NOT NULL,
    "DPPD" TEXT NOT NULL,
    "DPPE" TEXT NOT NULL,
    "IGH" TEXT NOT NULL,
    "IGM" TEXT NOT NULL,
    "tipoGravidez" TEXT NOT NULL,
    "riscoGestacional" TEXT NOT NULL,
    "gravidezPlanejada" BOOLEAN NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "fichasDoPreNatal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichasDoPreNatal" ADD CONSTRAINT "fichasDoPreNatal_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasDoPreNatal" ADD CONSTRAINT "fichasDoPreNatal_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
