import { prisma } from "../../../../database/prismaClient";

interface IEmergencyData {
    id_paciente: string
    nomeEmerg: string
    parentescoEmerg: string
    celEmerg: string
    telEmerg: string
}

export class UpdateEmergDataUseCase {
  async execute(data: IEmergencyData) {
    const dadosEmerg = await prisma.dadosEmergencia.update({
      where: {
        fk_idPaciente: data.id_paciente
      },
      data: {
        nomeEmerg: data.nomeEmerg || undefined,
        parentescoEmerg: data.parentescoEmerg || undefined,
        celEmerg: data.celEmerg || undefined,
        telEmerg: data.telEmerg || undefined,
      },
    })

    return dadosEmerg
  }
}