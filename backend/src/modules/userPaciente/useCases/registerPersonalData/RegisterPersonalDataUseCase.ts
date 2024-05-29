import { prisma } from "../../../../database/prismaClient"

interface DatasUser {
  id_paciente: string
  conhecidoComo: string
  nomeCompanheiro: string
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

export class RegisterPersonalDataUseCase {
  async execute({id_paciente, 
    conhecidoComo, 
    nomeCompanheiro, 
    dataNascimento, 
    idade, 
    raca, 
    trabalhaEmCasa, 
    ocupacao, 
    cep, 
    endereco, 
    cidade,
    estado,
    telefoneCelular,
    telefoneFixo } :DatasUser) {
    const personalDatas = await prisma.dadosPessoais.create({
      data: {
        conhecidoComo: conhecidoComo,
        nomeCompanheiro: nomeCompanheiro,
        dataNascimento: dataNascimento,
        idade: idade,
        raca: raca,
        trabalhaEmCasa: trabalhaEmCasa,
        ocupacao: ocupacao,
        cep: cep,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        telefoneFixo: telefoneFixo,
        telefoneCelular: telefoneCelular,
        paciente: {
          connect: {
            id: id_paciente, 
          },
        },
      },
    })

    return personalDatas
  }
}