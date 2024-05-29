import { CreateUserMedicoUseCase } from "../src/modules/userMedico/useCases/createUserMedico/CreateUserMedicoUseCase";
import { prismaMock } from "../singleton";


test('deve criar medico', async () => {
    const medico = {
        id: "1",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    }

    const medicoData = {
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    }

    prismaMock.medico.create.mockResolvedValue(medico)

    await expect(CreateUserMedicoUseCase.prototype.execute(medicoData)).resolves.toEqual({
        id: "1",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    })
})

test('deve falhar ao tentar criar medico já cadastrado', async () => {
    const medico = {
        id: "1",
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    }

    const medicoData = {
        cpf: "033.413.210-04",
        crm: "12312324123",
        email: "medico@email.com",
        password: "senha0123"
    }

    prismaMock.medico.create.mockResolvedValue(medico)
    prismaMock.medico.findUnique.mockResolvedValue(medico)

    await expect(CreateUserMedicoUseCase.prototype.execute(medicoData)).rejects.toThrow('Usuário já existe')
})