import { Request, Response } from "express";
import { GetFichaDePartoUseCase } from "./GetFichaDePartoUseCase";


export class GetFichaDePartoController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req

        const getFichaDePartoUseCase = new GetFichaDePartoUseCase()

        const result  =  await getFichaDePartoUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}