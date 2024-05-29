import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { cpf, password, nome, email } = req.body

    const createUserUseCase = new CreateUserUseCase()

    const result = await createUserUseCase.execute({
      nome, 
      email,
      cpf,
      password
    })

    return res.status(201).send(result)
  }
}