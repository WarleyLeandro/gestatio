import { Request, Response } from "express";
import { GetFamilyBackGroundUseCase } from "./GetFamilyBackGroundUseCase";


export class GetFamilyBackGroundController {
  async handle(req: Request, res: Response) {
    const { id_paciente } = req.params

    const getFamilyBackGroundUseCase = new GetFamilyBackGroundUseCase()

    const result = await getFamilyBackGroundUseCase.execute(id_paciente)

    return res.status(200).send(result)
  }
}