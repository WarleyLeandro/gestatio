import { Request, Response } from "express";
import { GetDadosPessoaisUseCase } from "./GetDadosPessoaisUseCase";


export class GetDadosPessoaisController {
  async handle(req: Request, res: Response) {
    const { id_paciente } = req.params

    const getDadosPessoaisUseCase = new GetDadosPessoaisUseCase()

    const result = await getDadosPessoaisUseCase.execute(id_paciente)

    return res.status(200).send(result)
  }
}