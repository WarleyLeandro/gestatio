-- CreateTable
CREATE TABLE "pacientesFavoritados" (
    "id" TEXT NOT NULL,
    "fk_idPaciente" TEXT NOT NULL,
    "fk_idMedico" TEXT NOT NULL,

    CONSTRAINT "pacientesFavoritados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientesFavoritados_fk_idPaciente_key" ON "pacientesFavoritados"("fk_idPaciente");

-- AddForeignKey
ALTER TABLE "pacientesFavoritados" ADD CONSTRAINT "pacientesFavoritados_fk_idPaciente_fkey" FOREIGN KEY ("fk_idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacientesFavoritados" ADD CONSTRAINT "pacientesFavoritados_fk_idMedico_fkey" FOREIGN KEY ("fk_idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
