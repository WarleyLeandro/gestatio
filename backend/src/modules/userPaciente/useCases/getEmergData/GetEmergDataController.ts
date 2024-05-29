import { Request, Response } from "express";
import { GetEmergDataUseCase } from "./GetEmergDataUseCase";


export class GetEmergDataController {
  async handle(req: Request, res: Response) {
    const { id_paciente } = req.params

    const getEmergDataUseCase = new GetEmergDataUseCase()

    const result = await getEmergDataUseCase.execute(id_paciente)

    return res.status(200).send(result)
  }
}