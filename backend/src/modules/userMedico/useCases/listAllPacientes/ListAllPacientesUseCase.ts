import { prisma } from "../../../../database/prismaClient";


export class ListAllPacientesUseCase {
  async execute() {
    const pacientes = await prisma.paciente.findMany()

    return pacientes
  }
}