import { prisma } from "../../../../database/prismaClient"


export class GetFichaDeVacinasUseCase {
    async execute(id_paciente: string) {
        const ficha = await prisma.fichaDeVacinas.findMany({
            where: {
                fk_idPaciente: id_paciente 
            },
        })

        if(!ficha) {
            throw new Error("Paciente não possui ficha de vacina cadastrada.")
        }

        return ficha
    }
}