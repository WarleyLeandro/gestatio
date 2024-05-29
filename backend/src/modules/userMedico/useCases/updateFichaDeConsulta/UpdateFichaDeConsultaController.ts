import { Request, Response } from "express";
import { UpdateFichaDeConsultaUseCase } from "./UpdateFichaDeConsultaUseCase";


export class UpdateFichaDeConsultaController {
    async handle(req: Request, res: Response) {
        const { dataConsulta,
            idadeGestacionalDUM,
            idadeGestacionalUSG,
            peso,
            IMC,
            queixa,
            apresentacaoFetal,
            observacaoDiagnosticoConduta,
            pressaoArterial,
            alturaUterina,
            batimentoCardiacoFetal,
            movimentoFetal,
            exantema,
            toque } = req.body
        const { id } = req.params

        const updateFichaDeConsultaUseCase = new UpdateFichaDeConsultaUseCase()

        const result = await updateFichaDeConsultaUseCase.execute({
            dataConsulta,
            idadeGestacionalDUM,
            idadeGestacionalUSG,
            peso,
            IMC,
            queixa,
            apresentacaoFetal,
            observacaoDiagnosticoConduta,
            pressaoArterial,
            alturaUterina,
            batimentoCardiacoFetal,
            movimentoFetal,
            exantema,
            toque,
            id
        })

        return res.status(200).send(result)
    }
}