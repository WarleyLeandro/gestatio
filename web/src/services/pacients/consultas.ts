import { ConsultasType } from "../../@types/consultaType";
import api from "../api";


export const getConsultasFunc = async (id_paciente: string) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.get(`/auth/medico/fichaDeConsulta/${id_paciente}`, {
      headers: {
        Authorization: `Bearer ${token}` // Passa o token no cabeçalho Authorization
      }
    });
    return response.data;
  } catch (error) {
    console.log("error = ", error);
    alert("Credenciais não encontradas!");
    throw new Error("Erro ao obter dados do paciente");
  }
};
export const postConsultasFunc = async (id_paciente: string, values: ConsultasType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const id_medico = localStorage.getItem('medico_id'); 
    const response = await api.post(`/auth/medico/cadastroFichaDeConsulta/${id_paciente}&${id_medico}`,
      values
      , {
        headers: {
          Authorization: `Bearer ${token}` // Passa o token no cabeçalho Authorization
        }
      });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter dados do paciente");
  }
};
export const putConsultasFunc = async (id_ficha: string, values: ConsultasType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.put(`/auth/medico/atualizaFichaDeConsulta/${id_ficha}`,
      values
      , {
        headers: {
          Authorization: `Bearer ${token}` // Passa o token no cabeçalho Authorization
        }
      });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter dados do paciente");
  }
};