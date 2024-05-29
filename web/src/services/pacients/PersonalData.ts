import { EmergencyType, SUSType, dadosPessoaisType } from "../../@types/DadosPessoais";
import api from "../api";

export const getPersonalDataFunc = async (id_paciente: string) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.get(`/auth/medico/dadosPessoais/${id_paciente}`, {
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
export const getSUSDataFunc = async (id_paciente: string) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.get(`/auth/medico/dadosSus/${id_paciente}`, {
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
export const getEmergencyDataFunc = async (id_paciente: string) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.get(`/auth/medico/dadosEmerg/${id_paciente}`, {
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
export const postPersonalDataFunc = async (id_paciente: string, values: dadosPessoaisType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.post(`/auth/medico/registroDadosPessoais/${id_paciente}`,
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
export const postEmergencyDataFunc = async (id_paciente: string, values: EmergencyType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.post(`/auth/medico/registroDadosEmerg/${id_paciente}`,
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
export const postSUSDataFunc = async (id_paciente: string, values: SUSType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.post(`/auth/medico/registroDadosSus/${id_paciente}`,
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
export const putPersonalDataFunc = async (id_paciente: string, values: dadosPessoaisType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.put(`/auth/medico/atualizaDados/${id_paciente}`,
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
export const putEmergencyDataFunc = async (id_paciente: string, values: EmergencyType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.put(`/auth/medico/atualizaDadosEmerg/${id_paciente}`,
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
export const putSUSDataFunc = async (id_paciente: string, values: SUSType) => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.put(`/auth/medico/atualizaDadosSus/${id_paciente}`,
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

