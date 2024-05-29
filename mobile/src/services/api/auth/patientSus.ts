import { PatientSusTypes } from "../../../@types/signOff.interface";
import api from "../api";

export const registerPatientSus = async (
  userData: PatientSusTypes,
  id_paciente: string,
  token: string
) => {
  return await api
    .post(`/auth/paciente/registroDadosSus/${id_paciente}`, userData, {
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

// export const updatePatientSus = async (values: PatientSusTypes) => {
//   return await api
//     .put("/auth/paciente/atualizaDadosSus", values)
//     .then((response) => {
//       const data = {
//         data: response.data,
//         status: response.status,
//       };
//       return data;
//     });
// };

// export const getPatientSus = async (id: String) => {
//   return await api
//     .get("/auth/paciente/atualizaDadosSus", {})
//     .then((response) => {
//       const data = {
//         data: response.data,
//         status: response.status,
//       };
//       return data;
//     });
// };
