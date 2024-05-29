import { prisma } from "../../../../database/prismaClient"
import { EstadoCivil, NivelInstrucao } from "../../../../database/enums"

interface IDadosPreNatal {
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
    id_paciente: string
    id_medico: string
}

export class CadastraFichaDoPreNatalUseCase {
    async execute(dados: IDadosPreNatal) {
        const ficha = await prisma.fichaDoPreNatal.create({
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
                fk_idPaciente: dados.id_paciente,
                fk_idMedico: dados.id_medico
            },
        })
        return ficha
    }
}