import { Request, Response } from "express";
import { GetFichaDePartoDaPacienteUseCase } from "./GetFichaDePartoDaPacienteUseCase";


export class GetFichaDePartoDaPacienteController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDePartoDaPacienteUseCase = new GetFichaDePartoDaPacienteUseCase()

        const result  =  await getFichaDePartoDaPacienteUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}