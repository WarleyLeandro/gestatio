import { prisma } from "../../../../database/prismaClient";


interface IDadosFichaParto {
    id_ficha: string
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
}

export class UpdateFichaDePartoUseCase {
    async execute(dados: IDadosFichaParto) {
        const update = await prisma.fichaDeParto.update({
            where: {
                id: dados.id_ficha
            },
            data: {
                altaNaMaternidade: dados.altaNaMaternidade,
                apgarPrimeiroMinuto: dados.apgarPrimeiroMinuto,
                apgarQuintoMinuto: dados.apgarQuintoMinuto,
                intercorrencias: dados.intercorrencias,
                medicamentosUsados: dados.medicamentosUsados,
                pesoNaAlta: dados.pesoNaAlta,
                recemNascido: dados.recemNascido,
                sangramento: dados.sangramento,
                tipoParto: dados.tipoParto,
                visitaDomiciliar: dados.visitaDomiciliar
            }
        })

        return update
    }
}