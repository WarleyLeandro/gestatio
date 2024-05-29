import { ATStatus } from "../../../../database/enums"
import { prisma } from "../../../../database/prismaClient"


interface IDadosFichaVacinas {
    ATStatus: ATStatus,
    AT1dose: string,
    AT2dose: string,
    vacinadTpa: string,
    HBStatus: string,
    HB1dose: string,
    HB2dose: string,
    HB3dose: string,
    id_medico: string,
    id_paciente: string,
}

export class CadastraFichaDeVacinasUseCase {
    async execute(dados: IDadosFichaVacinas) {
        const ficha = await prisma.fichaDeVacinas.create({
            data: {
                ATStatus: dados.ATStatus,
                AT1dose: dados.AT1dose,
                AT2dose: dados.AT2dose,
                vacinadTpa: dados.vacinadTpa,
                HBStatus: dados.HBStatus,
                HB1dose: dados.HB1dose,
                HB2dose: dados.HB2dose,
                HB3dose: dados.HB3dose,
                fk_idMedico: dados.id_medico,
                fk_idPaciente: dados.id_paciente
            }
        })

        return ficha
    }
}