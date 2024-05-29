import { Request, Response } from "express";
import { CadastraFichaDeExameUseCase } from "./CadastraFichaDeExameUseCase";


export class CadastraFichaDeExameController {
    async handle(req: Request, res:Response) {
        const { ABO_RH,
            glicemiaJejum,
            testeOralToleranciaGlicose,
            sifilis,
            vdrl,
            hiv_antiHiv,
            hepatiteB,
            toxoplasmose,
            hemoglobina_hematocrito,
            urinaEAS,
            urinaCultura,
            coombsIndireto } = req.body
        const { id_medico } = req.params
        const { id_paciente } = req.params

        const cadastraFichaDeExameUseCase = new CadastraFichaDeExameUseCase()

        const result = await cadastraFichaDeExameUseCase.execute({
            ABO_RH,
            glicemiaJejum,
            testeOralToleranciaGlicose,
            sifilis,
            vdrl,
            hiv_antiHiv,
            hepatiteB,
            toxoplasmose,
            hemoglobina_hematocrito,
            urinaEAS,
            urinaCultura,
            coombsIndireto,
            id_medico,
            id_paciente
        })

        return res.status(201).send(result)
    }
}