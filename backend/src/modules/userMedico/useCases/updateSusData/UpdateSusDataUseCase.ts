import { prisma } from "../../../../database/prismaClient";

interface ISusData {
    id_paciente: string
    susIdCartao: string
    nomeDoutorRef: string
    NISID: string
    hospitalNascCrianca: string
    unidMedicaPreNatal: string
}

export class UpdateSusDataUseCase {
  async execute(data: ISusData) {
    const dadosSus = await prisma.dadosSus.update({
      where: {
        fk_idPaciente: data.id_paciente
      },
      data: {
        susIdCartao: data.susIdCartao || undefined,
        nomeDoutorRef: data.nomeDoutorRef || undefined,
        NISID: data.NISID || undefined,
        hospitalNascCrianca: data.hospitalNascCrianca || undefined,
        unidMedicaPreNatal: data.unidMedicaPreNatal || undefined,
      },
    })

    return dadosSus
  }
}