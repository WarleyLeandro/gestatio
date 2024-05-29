import { prisma } from "../../../../database/prismaClient"


export class GetFichaDeExameUseCase {
    async execute(id_paciente: string) {
        const ficha = await prisma.fichaDeExame.findMany({
            where: {
                fk_idPaciente: id_paciente 
            },
        })

        if(!ficha) {
            throw new Error("Paciente não possui ficha de exame cadastrada.")
        }

        return ficha
    }
}