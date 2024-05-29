import { UserLogin } from "../../../@types/signOff.interface";
import api from "../api";

export const authUser = async (values: UserLogin) => {
  return await api.post("auth/loginPaciente", values).then((response) => {
    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  });
};

//TODO: recuperar senha

// export const recoverPassword = async (user: UserLogin) => {
//   try {
//     const response = await api.patch(`/user/${user.cpf}`, {
//       password: user.password,
//     });

//     const data = {
//       data: response.data,
//       status: response.status,
//     };
//     return data;
//   } catch (error) {
//     throw new Error("Ocorreu um erro durante o processamento.");
//   }
// };
