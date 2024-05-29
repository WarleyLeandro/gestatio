import { Request, Response } from "express";
import { UpdateSusDataUseCase } from "./UpdateSusDataUseCase";

export class UpdateSusDataController {
  async handle(req: Request, res: Response) {
    const { susIdCartao,
        nomeDoutorRef,
        NISID,
        hospitalNascCrianca,
        unidMedicaPreNatal } = req.body
    const { id_paciente } = req.params

    const updateSusDataUseCase = new UpdateSusDataUseCase()

    const result = await updateSusDataUseCase.execute({
        susIdCartao,
        nomeDoutorRef,
        NISID,
        hospitalNascCrianca,
        unidMedicaPreNatal,
        id_paciente
    })

    return res.status(200).send(result)
  }
}