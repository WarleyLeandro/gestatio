import { Request, Response } from "express";
import { GetFichaDoPreNatalUseCase } from "./GetFichaDoPreNatalUseCase";


export class GetFichaDoPreNatalController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDoPreNatalUseCase =  new GetFichaDoPreNatalUseCase()

        const result =  await getFichaDoPreNatalUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}