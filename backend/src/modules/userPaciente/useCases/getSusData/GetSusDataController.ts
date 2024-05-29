import { Request, Response } from "express";
import { GetSusDataUseCase } from "./GetSusDataUseCase";


export class GetSusDataController {
  async handle(req: Request, res: Response) {
    const { id_paciente } = req.params

    const getSusDataUseCase = new GetSusDataUseCase()

    const result = await getSusDataUseCase.execute(id_paciente)

    return res.status(200).send(result)
  }
}