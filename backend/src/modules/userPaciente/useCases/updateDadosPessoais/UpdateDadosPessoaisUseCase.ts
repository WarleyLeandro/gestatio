import { prisma } from "../../../../database/prismaClient";

interface IDadosPessoais {
  id_paciente: string  
  conhecidoComo: string
  nomeCompanheiro:string
  dataNascimento: string
  idade: number
  raca: string
  trabalhaEmCasa: boolean
  ocupacao: string
  cep: string
  endereco: string
  cidade: string
  estado: string
  telefoneFixo: string
  telefoneCelular: string
}

export class UpdateDadosPessoaisUseCase {
  async execute(data: IDadosPessoais) {
    const dados = await prisma.dadosPessoais.update({
      where: {
        fk_idPaciente: data.id_paciente
      },
      data: {
        conhecidoComo: data.conhecidoComo || undefined,
        nomeCompanheiro: data.nomeCompanheiro || undefined,
        dataNascimento: data.dataNascimento || undefined,
        idade: data.idade || undefined,
        raca: data.raca || undefined,
        trabalhaEmCasa: data.trabalhaEmCasa || undefined,
        ocupacao: data.ocupacao || undefined,
        cep: data.cep || undefined,
        endereco: data.endereco || undefined,
        cidade: data.cidade || undefined,
        estado: data.estado || undefined,
        telefoneFixo: data.telefoneFixo || undefined,
        telefoneCelular: data.telefoneCelular || undefined
      },
    })

    return dados
  }
}