import { Request, Response } from "express";
import { UpdateFichaDePreNatalUseCase } from "./UpdateFichaDePreNatalUseCase";


export class UpdateFichaDePreNatalController {
    async handle(req: Request, res: Response) {
        const { nivelInstrucao,
            estadoCivil,
            pesoAnterior,
            altura,
            IMC,
            DUM,
            DPPD,
            DPPE,
            IGH,
            IGM,
            tipoGravidez,
            riscoGestacional,
            gravidezPlanejada,
        } = req.body
        const { id } = req.params

        const updateFichaDePreNatalUseCase = new UpdateFichaDePreNatalUseCase()

        const result = await updateFichaDePreNatalUseCase.execute({
            nivelInstrucao,
            estadoCivil,
            pesoAnterior,
            altura,
            IMC,
            DUM,
            DPPD,
            DPPE,
            IGH,
            IGM,
            tipoGravidez,
            riscoGestacional,
            gravidezPlanejada,
            id,
        })

        return res.status(200).send(result)
    }
}