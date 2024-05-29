import { Request, Response } from "express";
import { UpdateEmergDataUseCase } from "./UpdateEmergDataUseCase";

export class UpdateEmergDataController {
  async handle(req: Request, res: Response) {
    const { nomeEmerg,
        parentescoEmerg,
        celEmerg,
        telEmerg } = req.body
    const { id_paciente } = req.params

    const updateEmergDataUseCase = new UpdateEmergDataUseCase

    const result = await updateEmergDataUseCase.execute({
        nomeEmerg,
        parentescoEmerg,
        celEmerg,
        telEmerg,
        id_paciente
    })

    return res.status(200).send(result)
  }
}