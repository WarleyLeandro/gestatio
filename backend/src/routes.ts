import { Router } from "express";
import { ensureAuthenticatePaciente } from "./middlewares/ensureAuthenticatePaciente";
import { ensureAuthenticateMedico } from "./middlewares/ensureAuthenticateMedico";
import { AuthenticateUserController } from "./modules/userPaciente/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/userPaciente/useCases/createUser/CreateUserController";
import { RegisterPersonalDataController } from "./modules/userPaciente/useCases/registerPersonalData/RegisterPersonalDataController";
import { AuthenticateUserMedicoController } from "./modules/userMedico/useCases/authenticateUserMedico/AuthenticateUserMedicoController";
import { CreateUserMedicoController } from "./modules/userMedico/useCases/createUserMedico/CreateUserMedicoController";
import { UpdateMedicoController } from "./modules/userMedico/useCases/updateMedico/UpdateMedicoController";
import { GetDadosPessoaisController } from "./modules/userPaciente/useCases/getDadosPessoais/GetDadosPessoaisController";
import { ListPacienteByNameController } from "./modules/userMedico/useCases/listPacienteByName/ListPacienteByNameController";
import { ListAllPacientesController } from "./modules/userMedico/useCases/listAllPacientes/ListAllPacientesController";
import { UpdateDadosPessoaisController } from "./modules/userPaciente/useCases/updateDadosPessoais/UpdateDadosPessoaisController";
import { RegisterSusDataController } from "./modules/userPaciente/useCases/registerSusData/RegisterSusDataController";
import { UpdateSusDataController } from "./modules/userMedico/useCases/updateSusData/UpdateSusDataController";
import { GetSusDataController } from "./modules/userPaciente/useCases/getSusData/GetSusDataController";
import { RegisterEmergDataController } from "./modules/userPaciente/useCases/registerEmergData/RegisterEmergDataController";
import { UpdateEmergDataController } from "./modules/userMedico/useCases/updateEmergData/UpdateEmergDataController";
import { GetEmergDataController } from "./modules/userPaciente/useCases/getEmergData/GetEmergDataController";
import { FavoritaPacienteController } from "./modules/userMedico/useCases/favoritaPaciente/FavoritaPacienteController";
import { CadastraFichaDePartoController } from "./modules/userMedico/useCases/cadastraFichaDeParto/CadastraFichaDePartoController";
import { GetFichaDePartoController } from "./modules/userPaciente/useCases/getFichaDeParto/GetFichaDePartoController";
import { GetFichaDePartoDaPacienteController } from "./modules/userMedico/useCases/getFichaDeParto/GetFichaDePartoDaPacienteController";
import { CadastroFichaDeConsultaController } from "./modules/userMedico/useCases/cadastraFichaDeConsulta/CadastraFichaDeConsultaController";
import { GetFichaDeConsultaController } from "./modules/userPaciente/useCases/getFichaDeConsulta/GetFichaDeConsultaController";
import { UpdateFichaDeConsultaController } from "./modules/userMedico/useCases/updateFichaDeConsulta/UpdateFichaDeConsultaController"
import { GetFichaDeConsultaDaPacienteController } from "./modules/userMedico/useCases/getFichaDeConsulta/GetFichaDeConsultaDaPacienteController";
import { RegisterFamilyBackGroundController } from "./modules/userPaciente/useCases/registerFamilyBackGround/RegisterFamilyBackGroundController";
import { UpdateFamilyBackGroundController } from "./modules/userMedico/useCases/updateFamilyBackGround/UpdateFamilyBackGroundController";
import { GetFamilyBackGroundController } from "./modules/userPaciente/useCases/getFamilyBackGround/GetFamilyBackGroundController";
import { GetFichaDoPreNatalController } from "./modules/userMedico/useCases/getFichaDoPreNatal/GetFichaDoPreNatalController";
import { CadastroFichaDoPreNatalController } from "./modules/userMedico/useCases/cadastrarFichaDoPreNatal/CadastraFichaDoPreNatalController";
import { UpdateFichaDePreNatalController } from "./modules/userMedico/useCases/updateFichaDePreNatal/UpdateFichaDePreNatalController";
import { CadastraFichaDeVacinasController } from "./modules/userMedico/useCases/cadastraFichaDeVacinas/CadastraFichaDeVacinasController";
import { GetFichaDeVacinasController } from "./modules/userMedico/useCases/getFichaDeVacinas/GetFichaDeVacinasContoller";
import { UpdateFichaDeVacinasController } from "./modules/userMedico/useCases/updateFichaDeVacinas/UpdateFichaDeVacinasController";

import { CadastraFichaDeExameController } from "./modules/userMedico/useCases/cadastraFichaDeExame/CadastraFichaDeExameController";
import { GetFichaDeExameController } from "./modules/userPaciente/useCases/getFichaDeExame/GetFichaDeExameContoller";
import { GetFichaDeExameDaPacienteController } from "./modules/userMedico/useCases/getFichaDeExameMedico/GetFichaDeExameDaPacienteController";
import { UpdateFichaDeExameController } from "./modules/userMedico/useCases/updateFichaDeExame/UpdateFichaDeExameController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const registerPersonalDataController = new RegisterPersonalDataController()
const createUserMedicoController = new CreateUserMedicoController()
const authenticateUserMedicoController = new AuthenticateUserMedicoController()
const updateMedicoController = new UpdateMedicoController()
const getDadosPessoaisController = new GetDadosPessoaisController()
const listPacienteByNameController = new ListPacienteByNameController()
const listAllPacientesController = new ListAllPacientesController()
const updateDadosPessoaisController = new UpdateDadosPessoaisController()
const registerSusDataController = new RegisterSusDataController()
const updateSusDataController = new UpdateSusDataController()
const getSusDataController = new GetSusDataController()
const registerEmergDataController = new RegisterEmergDataController()
const updateEmergDataController = new UpdateEmergDataController()
const getEmergDataController = new GetEmergDataController()
const favoritaPacienteController = new FavoritaPacienteController()
const cadastraFichaDePartoController = new CadastraFichaDePartoController()
const getFichaDePartoController = new GetFichaDePartoController()
const getFichaDePartoDaPacienteController = new GetFichaDePartoDaPacienteController()
const cadastroFichaDeConsultaController = new CadastroFichaDeConsultaController()
const getFichaDeConsultaController = new GetFichaDeConsultaController()
const getFichadeConsultaDaPacienteController = new GetFichaDeConsultaDaPacienteController()
const updateFichaDeConsulta = new UpdateFichaDeConsultaController()
const registerFamilyBackGroundController = new RegisterFamilyBackGroundController()
const updateFamilyBackGroundController = new UpdateFamilyBackGroundController()
const getFamilyBackGroundController = new GetFamilyBackGroundController()
const getFichaDoPreNatalController = new GetFichaDoPreNatalController()
const cadastroFichaDoPreNatalController = new CadastroFichaDoPreNatalController()
const updateFichaDoPreNatalController = new UpdateFichaDePreNatalController()
const cadastraFichaDeExameController = new CadastraFichaDeExameController()
const getFichaDeExamesController = new GetFichaDeExameController()
const updateFichaDeExamesController = new UpdateFichaDeExameController()
const getFichaDeExameDaPacienteController = new GetFichaDeExameDaPacienteController()

const cadastraFichaDeVacinasController = new CadastraFichaDeVacinasController()
const getFichaDeVacinasController = new GetFichaDeVacinasController()
const updateFichaDeVacinasController = new UpdateFichaDeVacinasController()


// Registros
routes.post('/auth/registroPaciente', createUserController.handle)
routes.post('/auth/registroMedico', createUserMedicoController.handle)
// Login
routes.post('/auth/loginPaciente', authenticateUserController.handle)
routes.post('/auth/loginMedico', authenticateUserMedicoController.handle)
// Dados pessoais
routes.post('/auth/paciente/registroDadosPessoais/:id_paciente', ensureAuthenticatePaciente, registerPersonalDataController.handle)
routes.post('/auth/medico/registroDadosPessoais/:id_paciente', ensureAuthenticateMedico, registerPersonalDataController.handle)
routes.get('/auth/medico/dadosPessoais/:id_paciente', ensureAuthenticateMedico, getDadosPessoaisController.handle)
routes.get('/auth/paciente/dadosPessoais/:id_paciente', ensureAuthenticatePaciente, getDadosPessoaisController.handle)
routes.put('/auth/medico/atualizaDados/:id_paciente', ensureAuthenticateMedico, updateDadosPessoaisController.handle)
// routes.put('/auth/paciente/atualizaDados/:id_paciente', ensureAuthenticatePaciente, updateDadosPessoaisController.handle)
// Dados SUS
routes.post('/auth/paciente/registroDadosSus/:id_paciente', ensureAuthenticatePaciente, registerSusDataController.handle)
routes.post('/auth/medico/registroDadosSus/:id_paciente', ensureAuthenticateMedico, registerSusDataController.handle)
routes.get('/auth/paciente/dadosSus/:id_paciente', ensureAuthenticatePaciente, getSusDataController.handle)
routes.get('/auth/medico/dadosSus/:id_paciente', ensureAuthenticateMedico, getSusDataController.handle)
routes.put('/auth/medico/atualizaDadosSus/:id_paciente', ensureAuthenticateMedico, updateSusDataController.handle)
// routes.put('/auth/paciente/atualizaDadosSus/:id_paciente', ensureAuthenticatePaciente, updateSusDataController.handle)
// Dados Emerg
routes.post('/auth/paciente/registroDadosEmerg/:id_paciente', ensureAuthenticatePaciente, registerEmergDataController.handle)
routes.post('/auth/medico/registroDadosEmerg/:id_paciente', ensureAuthenticateMedico, registerEmergDataController.handle)
routes.get('/auth/paciente/dadosEmerg/:id_paciente', ensureAuthenticatePaciente, getEmergDataController.handle)
routes.get('/auth/medico/dadosEmerg/:id_paciente', ensureAuthenticateMedico, getEmergDataController.handle)
routes.put('/auth/medico/atualizaDadosEmerg/:id_paciente', ensureAuthenticateMedico, updateEmergDataController.handle)
// Ficha de Parto
routes.post('/auth/medico/cadastroFichaDeParto/:id_paciente', ensureAuthenticateMedico, cadastraFichaDePartoController.handle)
// routes.put('/auth/medico/cadastroFichaDeParto/:id_paciente', ensureAuthenticateMedico, updateFichaDePartoController.handle)
routes.get('/auth/medico/fichaDePartoPaciente/:id_paciente', ensureAuthenticateMedico, getFichaDePartoDaPacienteController.handle)
routes.get('/auth/paciente/fichaDeParto/:id_paciente', ensureAuthenticatePaciente, getFichaDePartoController.handle)
// Ficha Consultas
routes.post('/auth/medico/cadastroFichaDeConsulta/:id_paciente&:id_medico', ensureAuthenticateMedico, cadastroFichaDeConsultaController.handle)
routes.get('/auth/paciente/fichaDeConsulta/:id_paciente', ensureAuthenticatePaciente, getFichadeConsultaDaPacienteController.handle)
routes.get('/auth/medico/fichaDeConsulta/:id_paciente', ensureAuthenticateMedico, getFichadeConsultaDaPacienteController.handle)
routes.put('/auth/medico/atualizaFichaDeConsulta/:id', ensureAuthenticateMedico, updateFichaDeConsulta.handle)
// Ficha consulta get unico
// routes.get('/auth/paciente/fichaDeConsulta/:id_paciente', ensureAuthenticatePaciente, getFichaDeConsultaController.handle)
// Lista Pacientes
routes.get('/auth/listaPaciente', ensureAuthenticateMedico, listPacienteByNameController.handle)
routes.get('/auth/pacientes', ensureAuthenticateMedico, listAllPacientesController.handle)
// Antecedentes
routes.post('/auth/medico/registroAntecedentes/:id_paciente', ensureAuthenticateMedico, registerFamilyBackGroundController.handle)
routes.get('/auth/medico/antecedentes/:id_paciente', ensureAuthenticateMedico, getFamilyBackGroundController.handle)
routes.put('/auth/medico/atualizaAntecedentes/:id_paciente', ensureAuthenticateMedico, updateFamilyBackGroundController.handle)
routes.get('/auth/paciente/antecedentes/:id_paciente', ensureAuthenticatePaciente, getFamilyBackGroundController.handle)
// Ficha do Pré Natal
routes.post('/auth/medico/cadastroFichaDoPreNatal/:id_paciente&:id_medico', ensureAuthenticateMedico, cadastroFichaDoPreNatalController.handle)
routes.get('/auth/medico/fichaDoPreNatal/:id_paciente', ensureAuthenticateMedico, getFichaDoPreNatalController.handle)
routes.get('/auth/paciente/fichaDoPreNatal/:id_paciente', ensureAuthenticatePaciente, getFichaDoPreNatalController.handle)
routes.put('/auth/medico/atualizaFichaDoPreNatal/:id', ensureAuthenticateMedico, updateFichaDoPreNatalController.handle)
// Ficha Exames 
routes.post('/auth/medico/cadastroFichaDeExame/:id_paciente&:id_medico', ensureAuthenticateMedico, cadastraFichaDeExameController.handle)
routes.get('/auth/medico/fichaDeExame/:id_paciente', ensureAuthenticateMedico, getFichaDeExamesController.handle)
routes.get('/auth/paciente/fichaDeExame/:id_paciente', ensureAuthenticatePaciente, getFichaDeExamesController.handle)
routes.put('/auth/medico/atualizaFichaDeExame/:id', ensureAuthenticateMedico, updateFichaDeExamesController.handle)// Ficha Exames 
// Ficha Vacinas
routes.post('/auth/medico/cadastroFichaDeVacinas/:id_paciente&:id_medico', ensureAuthenticateMedico, cadastraFichaDeVacinasController.handle)
routes.get('/auth/medico/fichaDeVacinas/:id_paciente', ensureAuthenticateMedico, getFichaDeVacinasController.handle)
routes.get('/auth/paciente/fichaDeVacinas/:id_paciente', ensureAuthenticatePaciente, getFichaDeVacinasController.handle)
routes.put('/auth/medico/atualizaFichaDeVacinas/:id', ensureAuthenticateMedico, updateFichaDeVacinasController.handle)
// Update Medico
routes.put('/auth/medico/atualizaDados', ensureAuthenticateMedico, updateMedicoController.handle)
// Favoritar Paciente
routes.post('/auth/medico/favoritaPaciente/:id_paciente', ensureAuthenticateMedico, favoritaPacienteController.handle)

export { routes }