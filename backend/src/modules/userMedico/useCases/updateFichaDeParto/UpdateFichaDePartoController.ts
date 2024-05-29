import { Request, Response } from "express";
import { UpdateFichaDePartoUseCase } from "./UpdateFichaDePartoUseCase";


export class UpdateFichaDePartoController {
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
        const { id_ficha } = req.params

        const updateFichaDePartoUseCase = new UpdateFichaDePartoUseCase()

        const result = await updateFichaDePartoUseCase.execute({
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
            id_ficha
        })

        return res.status(200).send(result)
    }

}