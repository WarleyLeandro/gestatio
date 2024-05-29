import { prisma } from "../../../../database/prismaClient";


export class FavoritaPacienteUseCase {
    async execute(id_medico: string, id_paciente: string) {
        const paciente = await prisma.paciente.findUnique({
            where: {
                id: id_paciente
            }
        })

        if(!paciente) {
            throw new Error('Paciente não encontrado')
        }

        await prisma.pacienteFavoritado.create({
            data: {
                fk_idMedico: id_medico,
                fk_idPaciente: paciente.id
            }
        })
    }
}