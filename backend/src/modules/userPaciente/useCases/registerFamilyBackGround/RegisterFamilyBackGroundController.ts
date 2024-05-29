import { Request, Response } from "express";
import { RegisterFamilyBackGroundUseCase } from "./RegisterFamilyBackgroundUseCase";

export class RegisterFamilyBackGroundController {
  async handle(req: Request, res: Response) {
    const { diabetes,
      hipertensao,
      gemelaridade,
      outros } = req.body
      const { id_paciente } = req.params

      const registerFamilyBackGroundUseCase = new RegisterFamilyBackGroundUseCase()

      const result = await registerFamilyBackGroundUseCase.execute({
        diabetes,
        hipertensao,
        gemelaridade,
        outros,
        id_paciente
      })

      return res.status(201).send(result)
  }
}