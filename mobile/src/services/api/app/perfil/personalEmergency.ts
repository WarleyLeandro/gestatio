import api from "../../api";

type RegisterPersonalDataResponse = {
  data: any;
  status: number;
};

export const getPersonalEmergency = async (
  token: string,
  id_paciente: string
): Promise<RegisterPersonalDataResponse> => {
  return await api
    .get(`/auth/paciente/dadosEmerg/${id_paciente}`, {
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
