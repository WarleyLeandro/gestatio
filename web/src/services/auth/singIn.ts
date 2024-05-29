import { UserLogin, UserRegister } from "../../@types/userTypes";
import api from "../api";

export const createUser = async (values: UserRegister) => {
  return await api
    .post("auth/registroMedico", {
      nome: values.nome,
      email: values.email,
      cpf: values.cpf,
      crm: values.crm,
      password: values.password,
    })
    .then((response) => {
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};

export const authUser = async (values: UserLogin) => {
  return await api
    .post("auth/loginMedico", {
      cpf: values.cpf,
      password: values.password,
    })
    .then((response) => {
      localStorage.setItem('medico_id', response.data.user.id);
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};

export const recoverPassword = async (user: UserLogin) => {
  try {
    const response = await api.patch(`/user/${user.cpf}`, {
      password: user.password,
    });

    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    console.log("--->Cadastro User error: ");
  }
};
