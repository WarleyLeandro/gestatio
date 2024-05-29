import { Request, Response } from "express";
import { RegisterPersonalDataUseCase } from "./RegisterSusDataUseCase";

export class RegisterSusDataController {
  async handle(req: Request, res: Response) {
    const { susIdCartao,
      nomeDoutorRef,
      NISID,
      hospitalNascCrianca,
      unidMedicaPreNatal } = req.body
      const { id_paciente } = req.params

      const RegisterSusDataUseCase = new RegisterPersonalDataUseCase()

      const result = await RegisterSusDataUseCase.execute({
        susIdCartao,
        nomeDoutorRef,
        NISID,
        hospitalNascCrianca,
        unidMedicaPreNatal,
        id_paciente
      })

      return res.status(201).send(result)
  }
}