import { compare } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"
import { sign } from 'jsonwebtoken'

interface IAuthenticateUserPaciente {
  cpf: string
  password: string
}

interface IAuthenticationResult {
  token: string
  user: any 
}

export class AuthenticateUserUseCase {
  async execute({ cpf, password }: IAuthenticateUserPaciente): Promise<IAuthenticationResult> {

    const user = await prisma.paciente.findFirst({
      where: {
        cpf: cpf
      }
    })

    if(!user) {
      throw new Error("CPF ou senha inválida")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("CPF ou senha inválida")
    }

    const token = sign({cpf}, "6de1c4c6ae4a49e7590d3bd4449d41d6", {
      subject: user.id,
      expiresIn: '1d'
    })

    const authenticationResult: IAuthenticationResult = {
      token,
      user: { ...user, password: undefined}
    }

    return authenticationResult
  }
}