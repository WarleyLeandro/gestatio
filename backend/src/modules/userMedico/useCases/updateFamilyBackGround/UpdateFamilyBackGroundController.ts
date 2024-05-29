import { Request, Response } from "express";
import { UpdateFamilyBackGroundUseCase } from "./UpdateFamilyBackGroundUseCase";

export class UpdateFamilyBackGroundController {
  async handle(req: Request, res: Response) {
    const { diabetes,
    hipertensao,
    gemelaridade,
    outros } = req.body
    const { id_paciente } = req.params

    const updateFamilyBackGroundUseCase = new UpdateFamilyBackGroundUseCase()

    const result = await updateFamilyBackGroundUseCase.execute({
     diabetes,
     hipertensao,
     gemelaridade,
     outros,
     id_paciente
    })

    return res.status(200).send(result)
  }
}