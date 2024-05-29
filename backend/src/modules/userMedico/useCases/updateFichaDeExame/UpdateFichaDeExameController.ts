import { Request, Response } from "express";
import { UpdateFichaDeExameUseCase } from "./UpdateFichaDeExameUseCase";


export class UpdateFichaDeExameController {
    async handle(req: Request, res: Response) {
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
        const { id } = req.params

        const updateFichaDeExameUseCase = new UpdateFichaDeExameUseCase()

        const result = await updateFichaDeExameUseCase.execute({
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
            id
        })

        return res.status(200).send(result)
    }
}