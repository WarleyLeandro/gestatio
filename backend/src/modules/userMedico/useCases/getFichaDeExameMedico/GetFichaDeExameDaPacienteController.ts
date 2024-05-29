import { Request, Response } from "express";
import { GetFichaDeExameDaPacienteUseCase } from "./GetFichaDeExameDaPacienteUseCase";


export class GetFichaDeExameDaPacienteController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params

        const getFichaDeExameDaPacienteUseCase = new GetFichaDeExameDaPacienteUseCase()

        const result = await getFichaDeExameDaPacienteUseCase.execute(id_paciente)

        return res.status(200).send(result)
    }
}