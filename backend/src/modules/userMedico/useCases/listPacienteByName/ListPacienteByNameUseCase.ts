import { prisma } from "../../../../database/prismaClient";


export class ListPacienteByNameUseCase {
  async execute(name: string) {
    const list = await prisma.paciente.findMany({
      where: {
        nome: {
          contains: name,
          mode: 'insensitive'
        }
      },
      take: 10,
    })

    return list
  }
}