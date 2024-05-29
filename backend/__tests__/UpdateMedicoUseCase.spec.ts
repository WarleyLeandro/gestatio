import { UpdateMedicoUseCase } from "../src/modules/userMedico/useCases/updateMedico/UpdateMedicoUseCase";
import { prismaMock } from "../singleton";

test('deve atualizar medico', async () => {

    const medico = {
        id: "1",
        nome: "olhala",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    }

    const medicoUpdateData = {
        id_medico: "1",
        email: "medicoupdate@email.com",
        password: "senha123"
    }

    const medicoUpdatedData = {
        id: "1",
        nome: "olhala",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medicoupdate@email.com",
        password: "senha123"
    }

    // prismaMock.medico.create.mockResolvedValue(medico)
    prismaMock.medico.update.mockResolvedValue(medicoUpdatedData)

    await expect(UpdateMedicoUseCase.prototype.execute(medicoUpdateData)).resolves.toEqual({
        id: "1",
        nome: "olhala",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medicoupdate@email.com",
        password: "senha123"
    })
})

test('deve atualizar sem o email', async () => {
    const medicoUpdateData = {
        id_medico: "1",
        email: null,
        password: "senha123"
    }

    const medicoUpdatedData = {
        id: "1",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medicoupdate@email.com",
        password: "senha123"
    }
})