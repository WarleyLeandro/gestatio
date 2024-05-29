// import { AuthenticateUserUseCase } from "../src/modules/userPaciente/useCases/authenticateUser/AuthenticateUserUseCase";
// import { prismaMock } from "../singleton";
// import { sign } from "jsonwebtoken";

// test('deve autenticar paciente', async () => {
//     const paciente = {
//         id: "1",
//         cpf: "033.413.210-04",
//         password: "senha0123",
//         dadosPessoais: {}
//     }

//     const authPacienteData = { 
//         cpf: "033.413.210-04",
//         password: "senha0123",
//     }

//     const token = sign({ cpf: "033.413.210-04" }, "6de1c4c6ae4a49e7590d3bd4449d41d6", {
//         subject: '1',
//         expiresIn: '24H'
//       })
    
//     prismaMock.paciente.create.mockResolvedValue(paciente)
//     // prismaMock.paciente.findFirst.mockResolvedValue(paciente)

//     await expect(AuthenticateUserUseCase.prototype.execute(authPacienteData)).resolves.toEqual(token)
// })