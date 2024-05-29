import { CreateUserUseCase } from "../src/modules/userPaciente/useCases/createUser/CreateUserUseCase";
import { prismaMock } from "../singleton";

test('deve criar paciente', async () => {
    const paciente = {
        id: "1",
        nome: "Joao",
        email: "paciente@email.com",
        cpf: "033.413.210-04",
        password: "senha0123",
        dadosPessoais: {}
    }

    const pacienteData = {
        nome: "Joao",
        email: "paciente@email.com",
        cpf: "033.413.210-04",
        password: "senha0123"
    }

    prismaMock.paciente.create.mockResolvedValue(paciente)

    await expect(CreateUserUseCase.prototype.execute(pacienteData)).resolves.toEqual({
        id: "1",
        nome: "Joao",
        email: "paciente@email.com",
        cpf: "033.413.210-04",
        password: "senha0123",
        dadosPessoais: {}
    })
})

test('deve falhar ao tentar criar paciente já cadastrado', async () => {
    const paciente = {
        id: "1",
        nome: "Joao",
        email: "paciente@email.com",
        cpf: "033.413.210-04",
        password: "senha0123",
        dadosPessoais: {}
    }

    const pacienteData = {
        nome: "Joao",
        email: "paciente@email.com",
        cpf: "033.413.210-04",
        password: "senha0123"
    }

    prismaMock.paciente.create.mockResolvedValue(paciente)
    prismaMock.paciente.findUnique.mockResolvedValue(paciente)

    await expect(CreateUserUseCase.prototype.execute(pacienteData)).rejects.toThrow('Usuário já existe')
})