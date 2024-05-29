import { ATStatus } from "../../../../database/enums"
import { prisma } from "../../../../database/prismaClient"

interface IDadosFichaVacinas {
    id: string,
    ATStatus: ATStatus,
    AT1dose: string,
    AT2dose: string,
    vacinadTpa: string,
    HBStatus: string,
    HB1dose: string,
    HB2dose: string,
    HB3dose: string,
}

export class UpdateFichaDeVacinasUseCase {
    async execute(dados: IDadosFichaVacinas) {
        const update = await prisma.fichaDeVacinas.update({
            where: {
                id: dados.id
            },
            data: {
                ATStatus: dados.ATStatus,
                AT1dose: dados.AT1dose,
                AT2dose: dados.AT2dose,
                vacinadTpa: dados.vacinadTpa,
                HBStatus: dados.HBStatus,
                HB1dose: dados.HB1dose,
                HB2dose: dados.HB2dose,
                HB3dose: dados.HB3dose,
            }
        })

        return update
    }
}