import { prisma } from "../../../../database/prismaClient";


export class GetFamilyBackGroundUseCase {
  async execute(id_paciente: string) {
    const dados = await prisma.fichaDeAntecedentes.findUnique({
      where: {
        fk_idPaciente: id_paciente
      },
    })

    return dados
  }
}