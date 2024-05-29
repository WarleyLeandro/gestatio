import { Request, Response } from "express";
import { UpdateDadosPessoaisUseCase } from "./UpdateDadosPessoaisUseCase";

export class UpdateDadosPessoaisController {
  async handle(req: Request, res: Response) {
    const { conhecidoComo,
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
      telefoneFixo,
      telefoneCelular } = req.body
    const { id_paciente } = req.params

    const updateDadosPessoaisUseCase = new UpdateDadosPessoaisUseCase()

    const result = await updateDadosPessoaisUseCase.execute({
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
      telefoneFixo,
      telefoneCelular,
      id_paciente
    })

    return res.status(200).send(result)
  }
}