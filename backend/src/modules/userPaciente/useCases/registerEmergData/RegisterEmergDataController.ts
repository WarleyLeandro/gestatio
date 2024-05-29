import { Request, Response } from "express";
import { RegisterEmergDataUseCase } from "./RegisterEmergDataUseCase";

export class RegisterEmergDataController {
  async handle(req: Request, res: Response) {
    const { nomeEmerg,
        parentescoEmerg,
        celEmerg,
        telEmerg } = req.body
      const { id_paciente } = req.params

      const registerEmergDataUseCase = new RegisterEmergDataUseCase()

      const result = await registerEmergDataUseCase.execute({
        nomeEmerg,
        parentescoEmerg,
        celEmerg,
        telEmerg,
        id_paciente
      })

      return res.status(201).send(result)
  }
}