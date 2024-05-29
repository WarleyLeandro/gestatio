import { prisma } from "../../../../database/prismaClient"


interface IDadosFicha {
    tipoParto: string
    sangramento: string
    intercorrencias: string
    medicamentosUsados: string
    altaNaMaternidade: string
    recemNascido: string
    apgarPrimeiroMinuto: string
    apgarQuintoMinuto: string
    pesoNaAlta: number
    visitaDomiciliar: string
    id_medico: string
    id_paciente: string
}

export class CadastraFichaDePartoUseCase {
    async execute(dados: IDadosFicha) {
        const dadosFicha = await prisma.fichaDeParto.create({
            data: {
                tipoParto: dados.tipoParto,
                sangramento: dados.sangramento,
                intercorrencias: dados.intercorrencias,
                medicamentosUsados: dados.medicamentosUsados,
                altaNaMaternidade: dados.altaNaMaternidade,
                recemNascido: dados.recemNascido,
                apgarPrimeiroMinuto: dados.apgarPrimeiroMinuto,
                apgarQuintoMinuto: dados.apgarQuintoMinuto,
                pesoNaAlta: dados.pesoNaAlta,
                visitaDomiciliar: dados.visitaDomiciliar,
                fk_idMedico: dados.id_medico,
                fk_idPaciente: dados.id_paciente
            },
        })

        return dadosFicha
    }
}