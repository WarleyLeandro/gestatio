import { Request, Response } from "express";
import { CadastraFichaDePartoUseCase } from "./CadastraFichaDePartoUseCase";


export class CadastraFichaDePartoController {
    async handle(req: Request, res: Response) {
        const { tipoParto,
            sangramento,
            intercorrencias,
            medicamentosUsados,
            altaNaMaternidade,
            recemNascido,
            apgarPrimeiroMinuto,
            apgarQuintoMinuto, 
            pesoNaAlta,
            visitaDomiciliar } = req.body
        const { id_paciente } = req.params
        const { id_medico } = req.params

        const cadastraFichaDePartoUseCase = new CadastraFichaDePartoUseCase()

        const result = await cadastraFichaDePartoUseCase.execute({
            tipoParto,
            sangramento,
            intercorrencias,
            medicamentosUsados,
            altaNaMaternidade,
            recemNascido,
            apgarPrimeiroMinuto,
            apgarQuintoMinuto, 
            pesoNaAlta,
            visitaDomiciliar,
            id_medico,
            id_paciente })

        return res.status(201).json(result)
    }
}