import { Request, Response } from "express";
import { CadastraFichaDeVacinasUseCase } from "./CadastraFichaDeVacinasUseCase";


export class CadastraFichaDeVacinasController {
    async handle(req: Request, res:Response) {
        const { ATStatus,
            AT1dose,
            AT2dose,
            vacinadTpa,
            HBStatus,
            HB1dose,
            HB2dose,
            HB3dose } = req.body
        const { id_medico } = req.params
        const { id_paciente } = req.params

        const cadastraFichaDeVacinasUseCase = new CadastraFichaDeVacinasUseCase()

        const result = await cadastraFichaDeVacinasUseCase.execute({
            ATStatus,
            AT1dose,
            AT2dose,
            vacinadTpa,
            HBStatus,
            HB1dose,
            HB2dose,
            HB3dose,
            id_medico,
            id_paciente
        })

        return res.status(201).send(result)
    }
}