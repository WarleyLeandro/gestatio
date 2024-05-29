import { UserRegister } from "../../../@types/signOff.interface";
import api from "../api";

export const createUser = async (values: UserRegister) => {
  return await api.post("auth/registroPaciente", values).then((response) => {
    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  });
};
