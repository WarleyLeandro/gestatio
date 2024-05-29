-- DropIndex
DROP INDEX "fichasDePartos_fk_idMedico_key";

-- DropIndex
DROP INDEX "fichasDePartos_fk_idPaciente_key";

-- DropIndex
DROP INDEX "pacientesFavoritados_fk_idPaciente_key";

-- CreateTable
CREATE TABLE "fichasDeConsultas" (
    "id" TEXT NOT NULL,
    "dataConsulta" TEXT NOT NULL,
    "idadeGestacionalDUM" TEXT NOT NULL,
    "idadeGestacionalUSG" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "IMC" DOUBLE PRECISION NOT NULL,
    "queixa" TEXT NOT NULL,
    "apresentacaoFetal" TEXT NOT NULL,
    "observacaoDiagnosticoConduta" TEXT NOT NULL,
    "pressaoArterial" DOUBLE PRECISION NOT NULL,
    "alturaUterina" DOUBLE PRECISION NOT NULL,
    "batimentoCardiacoFetal" DOUBLE PRECISION NOT NULL,
    "movimentoFetal" TEXT NOT NULL,
    "exantema" TEXT NOT NULL,
    "toque" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "fichasDeConsultas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fichasDeConsultas" ADD CONSTRAINT "fichasDeConsultas_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichasDeConsultas" ADD CONSTRAINT "fichasDeConsultas_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
