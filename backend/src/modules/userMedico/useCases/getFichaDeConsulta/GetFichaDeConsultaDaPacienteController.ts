import { Request, Response } from "express";
import { GetFichaDeConsultaDaPacienteUseCase } from "./GetFichaDeConsultaDaPacienteUseCase";


export class GetFichaDeConsultaDaPacienteController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDeConsultaDaPacienteUseCase =  new GetFichaDeConsultaDaPacienteUseCase()

        const result =  await getFichaDeConsultaDaPacienteUseCase.execute(id_paciente)

        return res.status(200).json(result)
    }
}