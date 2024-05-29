import * as yup from "yup";

export const validationsRegister = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string().email().required("O email é obrigatório"),
    cpf: yup.string().required("O CPF é obrigatório"),
    crm: yup.string().required("O CRM é obrigatório"),
    password: yup
      .string()
      // .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });