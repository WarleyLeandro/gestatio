import { Request, Response } from "express";
import { GetFichaDeExameUseCase } from "./GetFichaDeExameUseCase";


export class GetFichaDeExameController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDeExameUseCase = new GetFichaDeExameUseCase()

        const result =  await getFichaDeExameUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}