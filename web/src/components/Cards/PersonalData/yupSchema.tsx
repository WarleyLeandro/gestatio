import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  conhecidoComo: yup.string().required("Obrigatório"),
  nomeCompanheiro: yup.string().required("Obrigatório"),
  dataNascimento: yup.date().max(new Date(), 'Data de nascimento deve ser anterior ou igual à data atual').required("Obrigatório"),
  idade: yup.number().required("Obrigatório"),
  raca: yup.string().required("Obrigatório"),
  trabalhaEmCasa: yup.string().required("Obrigatório"),
  ocupacao: yup.string().required("Obrigatório"),
  cep: yup.string().required("Obrigatório"),
  endereco: yup.string().required("Obrigatório"),
  cidade: yup.string().required("Obrigatório"),
  estado: yup.string().required("Obrigatório"),
  telefoneFixo: yup.string().required("Obrigatório"),
  telefoneCelular: yup.string().required("Obrigatório"),
});   