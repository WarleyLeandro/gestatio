import { prisma } from "../../../../database/prismaClient"

interface EmergencyDatasUser {
  id_paciente: string
  nomeEmerg: string         
  parentescoEmerg: string   
  celEmerg: string          
  telEmerg: string
  
}

export class RegisterEmergDataUseCase {
  async execute({id_paciente, 
    nomeEmerg,
    parentescoEmerg,
    celEmerg,
    telEmerg} :EmergencyDatasUser) {
    const emergencyData = await prisma.dadosEmergencia.create({
      data: {
        nomeEmerg: nomeEmerg,
        parentescoEmerg: parentescoEmerg,
        celEmerg: celEmerg,
        telEmerg: telEmerg,
        paciente: {
          connect: {
            id: id_paciente, 
          },
        },
      },
    })

    return emergencyData
  }
}