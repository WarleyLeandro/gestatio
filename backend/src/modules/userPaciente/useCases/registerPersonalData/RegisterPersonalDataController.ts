import { Request, Response } from "express";
import { RegisterPersonalDataUseCase } from "./RegisterPersonalDataUseCase";

export class RegisterPersonalDataController {
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

      const registerPersonalDataUseCase = new RegisterPersonalDataUseCase()

      const result = await registerPersonalDataUseCase.execute({
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

      return res.status(201).send(result)
  }
}