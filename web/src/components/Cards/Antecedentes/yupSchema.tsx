import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  diabetes: yup.string().required("Obrigatório"),
  hipertensao: yup.string().required("Obrigatório"),
  gemelaridade: yup.string().required("Obrigatório"),
  outros: yup.string().required("Obrigatório"),
  });   