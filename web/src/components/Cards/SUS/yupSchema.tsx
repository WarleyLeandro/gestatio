import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  susIdCartao: yup.string().required("Obrigatório"),
  nomeDoutorRef: yup.string().required("Obrigatório"),
  NISID: yup.string().required("Obrigatório"),
  hospitalNascCrianca: yup.string().required("Obrigatório"),
  unidMedicaPreNatal: yup.string().required("Obrigatório"),
});   