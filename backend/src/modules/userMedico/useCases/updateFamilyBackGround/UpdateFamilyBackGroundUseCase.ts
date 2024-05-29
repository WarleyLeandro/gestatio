import { prisma } from "../../../../database/prismaClient";
import { SNNI } from "../../../../database/enums";

interface IDadosAntecedentes {
  id_paciente: string
  diabetes: SNNI
  hipertensao: SNNI
  gemelaridade: SNNI
  outros: SNNI
}

export class UpdateFamilyBackGroundUseCase {
  async execute(data: IDadosAntecedentes) {
    const dados = await prisma.fichaDeAntecedentes.update({
      where: {
        fk_idPaciente: data.id_paciente
      },
      data: {
        diabetes: data.diabetes || undefined,
        hipertensao: data.hipertensao || undefined,
        gemelaridade: data.gemelaridade || undefined,
        outros: data.outros || undefined,
      },
    })

    return dados
  }
}