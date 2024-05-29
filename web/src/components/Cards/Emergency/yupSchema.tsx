import * as yup from "yup";

export const validationsRegister = yup.object().shape({
    nomeEmerg: yup.string().required("Obrigatório"),
    parentescoEmerg: yup.string().required("Obrigatório"),
    celEmerg: yup.string().required("Obrigatório"),
    telEmerg: yup.string().required("Obrigatório"),
  });   