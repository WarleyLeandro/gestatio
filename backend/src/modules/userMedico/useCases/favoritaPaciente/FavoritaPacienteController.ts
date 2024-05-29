import { Request, Response } from "express";
import { FavoritaPacienteUseCase } from "./FavoritaPacienteUseCase";


export class FavoritaPacienteController {
    async handle(req: Request, res: Response) {
        const { id_paciente } = req.params
        const { id_medico } = req

        const favoritaPacienteUseCase = new FavoritaPacienteUseCase()

        const result = await favoritaPacienteUseCase.execute(id_medico, id_paciente)

        return res.status(200).send(result)
    }
}