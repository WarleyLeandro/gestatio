-- CreateEnum
CREATE TYPE "SNNI" AS ENUM ('SIM', 'NAO', 'NAO_INFORMADO');

-- CreateTable
CREATE TABLE "dadosSus" (
    "id" TEXT NOT NULL,
    "susIdCartao" TEXT NOT NULL,
    "nomeDoutorRef" TEXT NOT NULL,
    "NISID" TEXT NOT NULL,
    "hospitalNascCrianca" TEXT NOT NULL,
    "unidMedicaPreNatal" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,

    CONSTRAINT "dadosSus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dadosEmergencia" (
    "id" TEXT NOT NULL,
    "nomeEmerg" TEXT NOT NULL,
    "parentescoEmerg" TEXT NOT NULL,
    "celEmerg" TEXT NOT NULL,
    "telEmerg" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,

    CONSTRAINT "dadosEmergencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichaDeAntecedentes" (
    "id" TEXT NOT NULL,
    "diabetes" "SNNI" DEFAULT 'NAO_INFORMADO',
    "hipertencao" "SNNI" DEFAULT 'NAO_INFORMADO',
    "gemelaridade" "SNNI" DEFAULT 'NAO_INFORMADO',
    "outros" "SNNI" DEFAULT 'NAO_INFORMADO',
    "fk_idPaciente" TEXT NOT NULL,

    CONSTRAINT "fichaDeAntecedentes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dadosSus_fk_idPaciente_key" ON "dadosSus"("fk_idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "dadosEmergencia_fk_idPaciente_key" ON "dadosEmergencia"("fk_idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "fichaDeAntecedentes_fk_idPaciente_key" ON "fichaDeAntecedentes"("fk_idPaciente");

-- AddForeignKey
ALTER TABLE "dadosSus" ADD CONSTRAINT "dadosSus_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dadosEmergencia" ADD CONSTRAINT "dadosEmergencia_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichaDeAntecedentes" ADD CONSTRAINT "fichaDeAntecedentes_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
