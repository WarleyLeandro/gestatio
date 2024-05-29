import { ExamesType } from "../../@types/ExamesType";
import api from "../api";


export const getExamesFunc = async (id_paciente: string) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.get(`/auth/medico/fichaDeExame/${id_paciente}`, {
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
export const postExamesFunc = async (id_paciente: string, values: ExamesType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const id_medico = localStorage.getItem('medico_id'); // Obtém o id do medico logado
      const response = await api.post(`/auth/medico/cadastroFichaDeExame/${id_paciente}&${id_medico}`,
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
  export const putExamesFunc = async (id_ficha: string, values: ExamesType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.put(`/auth/medico/atualizaFichaDeExame/${id_ficha}`,
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