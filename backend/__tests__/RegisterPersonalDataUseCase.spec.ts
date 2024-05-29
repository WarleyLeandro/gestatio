// import { RegisterPersonalDataUseCase } from "../src/modules/userPaciente/useCases/registerPersonalData/RegisterPersonalDataUseCase";
// import { prismaMock } from "../singleton";

// test('deve registrar dados pessoais do paciente', async () => {
//     const paciente = {
//         id: "1",
//         cpf: "033.413.210-04",
//         password: "senha0123",
//         dadosPessoais: {}
//     }
    
//     const dadosPessoais = {
//         id: "1",
//         nome: "John Doe",
//         conhecidoComo: "John",
//         nomeCompanheiro: "Jane Doe",
//         dataNascimento: "1990-01-01",
//         idade: 32,
//         raca: "White",
//         trabalhaEmCasa: true,
//         ocupacao: "Software Developer",
//         cep: "12345-678",
//         endereco: "123 Main St",
//         cidade: "Example City",
//         estado: "Example State",
//         telefoneFixo: "555-1234",
//         telefoneCelular: "555-5678",
//         email: "john@example.com",
//         paciente: { paciente },
//     }

//     const dataUser = {
//         data: {
//             paciente: {
//                 connect: {
//                     id: dadosPessoais.id,
//                 },
//             },
//             nome: dadosPessoais.nome,
//             conhecidoComo: dadosPessoais.conhecidoComo,
//             nomeCompanheiro: dadosPessoais.nomeCompanheiro,
//             dataNascimento: dadosPessoais.dataNascimento,
//             idade: dadosPessoais.idade,
//             raca: dadosPessoais.raca,
//             trabalhaEmCasa: false,
//             ocupacao: dadosPessoais.ocupacao,
//             cep: dadosPessoais.cep,
//             endereco: dadosPessoais.endereco,
//             cidade: dadosPessoais.cidade,
//             estado: dadosPessoais.estado,
//             telefoneFixo: dadosPessoais.telefoneFixo,
//             telefoneCelular: dadosPessoais.telefoneCelular,
//             email: dadosPessoais.email
//         }
//     }

//     prismaMock.paciente.create.mockResolvedValue(paciente)
//     //prismaMock.dadosPessoais.create.mockResolvedValue(dadosPessoais)    
// })