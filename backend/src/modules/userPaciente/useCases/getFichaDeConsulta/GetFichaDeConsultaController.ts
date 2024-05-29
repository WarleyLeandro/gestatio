import { Request, Response } from "express";
import { GetFichaDeConsultaUseCase } from "./GetFichaDeConsultaUseCase";


export class GetFichaDeConsultaController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req

        const getFichaDeConsultaUseCase = new GetFichaDeConsultaUseCase()

        const result =  await getFichaDeConsultaUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}