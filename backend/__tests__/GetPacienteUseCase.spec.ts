// import { GetPacienteUseCase } from "../src/modules/userPaciente/useCases/getPaciente/GetPacienteUseCase";
// import { prismaMock } from "../singleton";

// test('deve retornar paciente', async () => {
//     const paciente = {
//         id: "1",
//         cpf: "033.413.210-04",
//         password: "senha0123",
//         dadosPessoais: {}
//     }

//     prismaMock.paciente.create.mockResolvedValue(paciente)
//     prismaMock.paciente.findUnique.mockResolvedValue(paciente)

//     await expect(GetPacienteUseCase.prototype.execute(paciente.id)).resolves.toEqual("033.413.210-04")
// })

// test('deve falhar ou procurar paciente inexistente', async () => {
//     await expect(GetPacienteUseCase.prototype.execute("2")).rejects.toThrowError("Paciente não encontrado")
// })