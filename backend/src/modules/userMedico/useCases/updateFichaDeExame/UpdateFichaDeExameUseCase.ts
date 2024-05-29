import { PositivoNegativo } from "../../../../database/enums"
import { prisma } from "../../../../database/prismaClient"

interface IDadosFichaExame {
    id: string
    ABO_RH: string
    glicemiaJejum: string
    testeOralToleranciaGlicose: string
    sifilis: PositivoNegativo
    vdrl: PositivoNegativo
    hiv_antiHiv: PositivoNegativo
    hepatiteB: PositivoNegativo
    toxoplasmose: PositivoNegativo
    hemoglobina_hematocrito: string
    urinaEAS: string
    urinaCultura: string
    coombsIndireto: string
}

export class UpdateFichaDeExameUseCase {
    async execute(dados: IDadosFichaExame) {
        const update = await prisma.fichaDeExame.update({
            where: {
                id: dados.id
            },
            data: {
                ABO_RH: dados.ABO_RH,
                coombsIndireto: dados.coombsIndireto,
                glicemiaJejum: dados.glicemiaJejum,
                hemoglobina_hematocrito: dados.hemoglobina_hematocrito,
                hepatiteB: dados.hepatiteB,
                hiv_antiHiv: dados.hiv_antiHiv,
                sifilis: dados.sifilis,
                testeOralToleranciaGlicose: dados.testeOralToleranciaGlicose,
                toxoplasmose: dados.toxoplasmose,
                urinaCultura: dados.urinaCultura,
                urinaEAS: dados.urinaEAS,
                vdrl: dados.vdrl
            }
        })

        return update
    }
}