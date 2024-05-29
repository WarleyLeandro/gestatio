import { VacinasType } from "../../@types/vacinasType";
import api from "../api";


export const getVacinasFunc = async (id_paciente: string) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.get(`/auth/medico/fichaDeVacinas/${id_paciente}`, {
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
export const postVacinasFunc = async (id_paciente: string, values: VacinasType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const id_medico = localStorage.getItem('medico_id'); // Obtém o id do medico logado
      const response = await api.post(`/auth/medico/cadastroFichaDeVacinas/${id_paciente}&${id_medico}`,
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
  export const putVacinasFunc = async (id_ficha: string, values: VacinasType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.put(`/auth/medico/atualizaFichaDeVacinas/${id_ficha}`,
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