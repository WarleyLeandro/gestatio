import { prisma } from "../../../../database/prismaClient";


export class GetDadosPessoaisUseCase {
  async execute(id_paciente: string) {
    const dados = await prisma.dadosPessoais.findUnique({
      where: {
        fk_idPaciente: id_paciente
      },
    });

    return dados
  }
}