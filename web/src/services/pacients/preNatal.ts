import { PreNatalType } from "../../@types/preNatalTypes";
import api from "../api";


export const getPreNatalFunc = async (id_paciente: string) => {
    try {
        const token = localStorage.getItem('token'); // Obtém o token do localStorage
        const response = await api.get(`/auth/medico/fichaDoPreNatal/${id_paciente}`, {
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
export const postPreNatalFunc = async (id_paciente: string, values: PreNatalType) => {
    try {
        const token = localStorage.getItem('token'); // Obtém o token do localStorage
        const id_medico = localStorage.getItem('medico_id'); // Obtém o id do medico logado
        const response = await api.post(`/auth/medico/cadastroFichaDoPreNatal/${id_paciente}&${id_medico}`,
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
  export const putPreNatalFunc = async (id_paciente: string, values: PreNatalType) => {
    try {
      const token = localStorage.getItem('token'); // Obtém o token do localStorage
      const response = await api.put(`/auth/medico/atualizaFichaDoPreNatal/${id_paciente}`,
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