import { PersonalDataTypes } from "../../../@types/signOff.interface";
import api from "../api";

type RegisterPersonalDataResponse = {
  data: any;
  status: number;
};

export const registerPersonalData = async (
  userData: PersonalDataTypes,
  token: string,
  id_paciente: string
): Promise<RegisterPersonalDataResponse> => {
  return await api
    .post(`/auth/paciente/registroDadosPessoais/${id_paciente}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const data: RegisterPersonalDataResponse = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};
