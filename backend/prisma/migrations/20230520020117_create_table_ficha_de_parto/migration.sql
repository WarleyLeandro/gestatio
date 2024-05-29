-- CreateTable
CREATE TABLE "fichasDePartos" (
    "id" TEXT NOT NULL,
    "tipoParto" TEXT NOT NULL,
    "sangramento" TEXT NOT NULL,
    "intercorrencias" TEXT NOT NULL,
    "medicamentosUsados" TEXT NOT NULL,
    "altaNaMaternidade" TEXT NOT NULL,
    "recemNascido" TEXT NOT NULL,
    "apgarPrimeiroMinuto" TEXT NOT NULL,
    "apgarQuintoMinuto" TEXT NOT NULL,
    "pesoNaAlta" DOUBLE PRECISION NOT NULL,
    "visitaDomiciliar" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "fichasDePartos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fichasDePartos_fk_idPaciente_key" ON "fichasDePartos"("fk_idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "fichasDePartos_fk_idMedico_key" ON "fichasDePartos"("fk_idMedico");

-- AddForeignKey
ALTER TABLE "fichasDePartos" ADD CONSTRAINT "fichasDePartos_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasDePartos" ADD CONSTRAINT "fichasDePartos_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
