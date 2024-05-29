import { Request, Response } from "express";
import { GetFichaDeVacinasUseCase } from "./GetFichaDeVacinasUseCase";


export class GetFichaDeVacinasController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDeVacinasUseCase = new GetFichaDeVacinasUseCase()

        const result =  await getFichaDeVacinasUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}