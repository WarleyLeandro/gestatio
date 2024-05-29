import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateUser {
  nome: string
  email: string
  cpf: string
  password: string
}

export class CreateUserUseCase {
  async execute({ cpf, password, nome, email }: ICreateUser) {

    const userExists = await prisma.paciente.findUnique({
      where: {
        cpf: cpf
      }
    })

    if(userExists) {
      throw new Error('Usuário já existe')
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.paciente.create({
      data: {
        email,
        nome,
        cpf,
        password: hashPassword
      },
    })

    return user
  }
}