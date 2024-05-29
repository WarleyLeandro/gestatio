import { prisma } from "../../../../database/prismaClient";


export class GetFichaDeConsultaDaPacienteUseCase {
    async execute(id_paciente: string) {
        const ficha = await prisma.fichaDeConsulta.findMany({
            where: {
                fk_idPaciente: id_paciente
            }
        })

        if(!ficha) {
            throw new Error("Paciente ainda não possui ficha de consulta cadastrada.")
        }

        return ficha
    }
}