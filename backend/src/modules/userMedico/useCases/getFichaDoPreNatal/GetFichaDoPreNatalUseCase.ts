import { prisma } from "../../../../database/prismaClient";

export class GetFichaDoPreNatalUseCase {
    async execute(id_paciente: string) {
        const ficha = await prisma.fichaDoPreNatal.findMany({
            where: {
                fk_idPaciente: id_paciente
            }
        })

        if(!ficha) {
            throw new Error("Paciente ainda não possui ficha do Pre Natal cadastrada.")
        }

        return ficha
    }
}