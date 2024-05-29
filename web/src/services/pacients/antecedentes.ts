import { AntecedentesType } from "../../@types/antecedentesTypes";
import api from "../api";


export const getAntecedentesFunc = async (id_paciente: string) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.get(`/auth/medico/antecedentes/${id_paciente}`, {
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
export const postAntecedentesFunc = async (id_paciente: string, values: AntecedentesType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.post(`/auth/medico/registroAntecedentes/${id_paciente}`,
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
  export const putAntecedentesFunc = async (id_paciente: string, values: AntecedentesType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.put(`/auth/medico/atualizaAntecedentes/${id_paciente}`,
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