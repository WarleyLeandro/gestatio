import { prisma } from "../../../../database/prismaClient"

interface SusDataUser {
  id_paciente: string
    susIdCartao: string
    nomeDoutorRef: string
    NISID: string
    hospitalNascCrianca: string
    unidMedicaPreNatal: string
}

export class RegisterPersonalDataUseCase {
  async execute({id_paciente, 
    susIdCartao,
    nomeDoutorRef,
    NISID,
    hospitalNascCrianca,
    unidMedicaPreNatal
    } :SusDataUser) {
    const susData = await prisma.dadosSus.create({
      data: {
        susIdCartao: susIdCartao,
        nomeDoutorRef: nomeDoutorRef,
        NISID: NISID,
        hospitalNascCrianca: hospitalNascCrianca,
        unidMedicaPreNatal: unidMedicaPreNatal,
        paciente: {
          connect: {
            id: id_paciente, 
          },
        },
      },
    })

    return susData
  }
}