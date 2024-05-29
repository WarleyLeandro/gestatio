import { Request, Response } from "express";
import { CadastraFichaDeConsultaUseCase } from "./CadastraFichaDeConsultaUseCase";


export class CadastroFichaDeConsultaController {
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
        const { id_medico } = req.params
        const { id_paciente } = req.params

        const cadastroFichaDeConsultaUseCase = new CadastraFichaDeConsultaUseCase()

        const result =  await cadastroFichaDeConsultaUseCase.execute({
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
            id_medico,
            id_paciente
        })

        return res.status(201).json(result)
    }
}