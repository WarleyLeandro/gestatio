import { prisma } from "../../../../database/prismaClient";


export class GetFichaDePartoUseCase {
    async execute(id_paciente: string) {
        const ficha = await prisma.fichaDeParto.findMany({
            where: {
                fk_idPaciente: id_paciente
            },
        })

        if(!ficha) {
            throw new Error("Você ainda não possui ficha de parto cadastrada.")
        }

        return ficha
    }
}