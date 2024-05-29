import { PatientEmergencyTypes } from "../../../@types/signOff.interface";
import api from "../api";

export const registerPatientEmergency = async (
  userData: PatientEmergencyTypes,
  id_paciente: string,
  token: string
) => {
  return await api
    .post(`/auth/paciente/registroDadosEmerg/${id_paciente}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};

export const updatePatientEmergency = async (values: PatientEmergencyTypes) => {
  return await api
    .put("//auth/paciente/atualizaDadosEmerg", values)
    .then((response) => {
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};

export const getByIdPatientEmergency = async (
  values: PatientEmergencyTypes
) => {
  return await api
    .post("/auth/paciente/dadosEmerg", values)
    .then((response) => {
      const data = {
        data: response.data,
        status: response.status,
      };
      return data;
    });
};
