import { Request, Response } from "express";
import { CadastraFichaDoPreNatalUseCase } from "./CadastraFichaDoPreNatalUseCase";


export class CadastroFichaDoPreNatalController {
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
            gravidezPlanejada} = req.body
            const { id_paciente, id_medico } = req.params;

        const cadastroFichaDoPreNatalUseCase = new CadastraFichaDoPreNatalUseCase()

        const result =  await cadastroFichaDoPreNatalUseCase.execute({
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
            id_medico,
            id_paciente
        })

        return res.status(201).json(result)
    }
}