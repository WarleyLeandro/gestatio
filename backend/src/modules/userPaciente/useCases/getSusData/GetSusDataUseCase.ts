import { prisma } from "../../../../database/prismaClient";


export class GetSusDataUseCase {
  async execute(id_paciente: string) {
    const dadosSus = await prisma.dadosSus.findUnique({
      where: {
        fk_idPaciente: id_paciente
      },
    })

    return dadosSus
  }
}