import { EstadoCivil, NivelInstrucao } from "../../../../database/enums"
import { prisma } from "../../../../database/prismaClient"

interface IDadosPreNatal {
    id: string
    nivelInstrucao: NivelInstrucao
    estadoCivil: EstadoCivil
    pesoAnterior: string
    altura: string
    IMC: string
    DUM: string
    DPPD: string
    DPPE: string
    IGH: string
    IGM: string
    tipoGravidez: string
    riscoGestacional: string
    gravidezPlanejada: boolean
}

export class UpdateFichaDePreNatalUseCase {
    async execute(dados: IDadosPreNatal) {
        const update = await prisma.fichaDoPreNatal.update({
            where: {
                id: dados.id
            },
            data: {
                nivelInstrucao: dados.nivelInstrucao,
                estadoCivil: dados.estadoCivil,
                pesoAnterior: dados.pesoAnterior,
                altura: dados.altura,
                IMC: dados.IMC,
                DUM: dados.DUM,
                DPPD: dados.DPPD,
                DPPE: dados.DPPE,
                IGH: dados.IGH,
                IGM: dados.IGM,
                tipoGravidez: dados.tipoGravidez,
                riscoGestacional: dados.riscoGestacional,
                gravidezPlanejada: dados.gravidezPlanejada,
            }
        })

        return update
    }
}