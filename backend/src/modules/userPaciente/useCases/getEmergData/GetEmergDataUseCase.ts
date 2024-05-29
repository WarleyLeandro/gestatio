import { prisma } from "../../../../database/prismaClient";


export class GetEmergDataUseCase {
  async execute(id_paciente: string) {
    const dadosEmerg = await prisma.dadosEmergencia.findUnique({
      where: {
        fk_idPaciente: id_paciente
      },
    })

    return dadosEmerg
  }
}