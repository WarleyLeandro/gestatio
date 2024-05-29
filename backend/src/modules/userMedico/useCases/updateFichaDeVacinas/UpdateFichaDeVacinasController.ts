import { Request, Response } from "express";
import { UpdateFichaDeVacinasUseCase } from "./UpdateFichaDeVacinasUseCase";


export class UpdateFichaDeVacinasController {
    async handle(req: Request, res: Response) {
        const { ATStatus,
            AT1dose,
            AT2dose,
            vacinadTpa,
            HBStatus,
            HB1dose,
            HB2dose,
            HB3dose } = req.body
        const { id } = req.params

        const updateFichaDeVacinasUseCase = new UpdateFichaDeVacinasUseCase()

        const result = await updateFichaDeVacinasUseCase.execute({
            ATStatus,
            AT1dose,
            AT2dose,
            vacinadTpa,
            HBStatus,
            HB1dose,
            HB2dose,
            HB3dose,
            id
        })

        return res.status(200).send(result)
    }
}